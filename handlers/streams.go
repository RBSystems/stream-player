package handlers

import (
	"net/http"

	"github.com/byuoitav/common/log"
	"github.com/labstack/echo"
)

// StreamContainer contains the streams
type StreamContainer struct {
	Streams []Stream `json:"stream"`
}

// Stream Struct
type Stream struct {
	Name    string `json:"name"`
	Address string `json:"address"`
}

// GetStreams returns the array of all streams
func GetStreams(ctx echo.Context) error {
	var streamContainer StreamContainer
	streamContainer.Streams = []Stream{
		{
			Name:    "Stream 1",
			Address: "http://10.11.17.43:1935/overflow/Office_Camera.stream/playlist.m3u8",
		},
		{
			Name:    "Stream 2",
			Address: "http://10.11.17.43:1935/overflow/1108_Encoder.stream/playlist.m3u8",
		},
		{
			Name:    "Stream 3",
			Address: "http://turtle1.byu.edu:1935/overflow/itb1108cam1.stream/playlist.m3u8",
		},
		{
			Name:    "Stream 4",
			Address: "http://turtle1.byu.edu:1935/overflow/itb1108cam2.stream/playlist.m3u8",
		},
	}

	log.L.Debugf("Stream Container: %v", streamContainer)

	return ctx.JSON(http.StatusOK, streamContainer.Streams)
}
