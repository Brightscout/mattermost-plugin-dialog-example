package main

import (
	"net/http"

	"github.com/mattermost/mattermost-server/v5/model"
	"github.com/mattermost/mattermost-server/v5/plugin"
)

// ServeHTTP allows the plugin to implement the http.Handler interface. Requests destined for the
// /plugins/{id} path will be routed to the plugin.
//
// The Mattermost-User-Id header will be present if (and only if) the request is by an
// authenticated user.
//
// This demo implementation sends back whether or not the plugin hooks are currently enabled. It
// is used by the web app to recover from a network reconnection and synchronize the state of the
// plugin's hooks.
func (p *Plugin) ServeHTTP(c *plugin.Context, w http.ResponseWriter, r *http.Request) {
	switch r.URL.Path {
	case "/hello":
		p.handleHello(w, r)
	case "/dialog":
		p.handleOpenDialog(w, r)
	default:
		http.NotFound(w, r)
	}
}

func (p *Plugin) handleHello(w http.ResponseWriter, r *http.Request) {
	if _, err := w.Write([]byte("Hello World!")); err != nil {
		p.API.LogError("Failed to write hello world", "err", err.Error())
	}
}

func (p *Plugin) handleOpenDialog(w http.ResponseWriter, r *http.Request) {
	request := ModalRequestFromJSON(r.Body)
	if request == nil {
		p.API.LogError("Failed to decode Modal1Request")
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	user, appErr := p.API.GetUserByUsername(request.Username)
	if appErr != nil {
		p.API.LogError("Failed to get user for modal1 request", "username", request.Username, "err", appErr.Error())
		w.WriteHeader(http.StatusOK)
		return
	}

	p.API.PublishWebSocketEvent("open_modal", request.Payload, &model.WebsocketBroadcast{UserId: user.Id})
	w.WriteHeader(http.StatusOK)
}
