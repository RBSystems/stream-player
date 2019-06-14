package handlers

import (
	"net/http"

	"github.com/labstack/echo"
)

type Stream struct {
	Name    string `json:"name"`
	Address string `json:"address"`
}

type StreamContainer struct {
	List []Stream
}

func GetStreams(ctx echo.Context) error {

	streams := []Stream{
		{
			Name:    "Stream1",
			Address: "http://10.11.17.43:1935/overflow/Office_Camera.stream/playlist.m3u8",
		},
		{
			Name:    "Stream2",
			Address: "http://10.11.17.43:1935/overflow/1108_Encoder.stream/playlist.m3u8",
		},
		// {
		// 	Name:    "Stream3",
		// 	Address: "stream3.address",
		// },
		// {
		// 	Name:    "Stream4",
		// 	Address: "stream4.address",
		// },
	}

	streamContainer := &StreamContainer{streams}

	return ctx.JSON(http.StatusOK, streamContainer)
}
