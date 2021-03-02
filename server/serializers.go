package main

import (
	"encoding/json"
	"io"
)

type ModalRequest struct {
	Username string
	Payload  map[string]interface{}
}

func ModalRequestFromJSON(data io.Reader) *ModalRequest {
	var o *ModalRequest
	err := json.NewDecoder(data).Decode(&o)
	if err != nil {
		return nil
	}
	return o
}
