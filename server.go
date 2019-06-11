package main

import (
	"net/http"

	"github.com/byuoitav/common/v2/auth"
	"github.com/byuoitav/stream-player/handlers"
	"github.com/labstack/echo"
)

func main() {
	port := ":10001"

	router := echo.New()
	router.Use(echo.WrapMiddleware(auth.AuthenticateCASUser))

	router.GET("/streams", handlers.GetStreams)

	router.Static("/", "av-netflix-dist")

	server := http.Server{
		Addr:           port,
		MaxHeaderBytes: 1024 * 10,
	}

	router.StartServer(&server)
}
