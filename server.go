package main

import (
	"net/http"

	"github.com/byuoitav/common"
	"github.com/byuoitav/common/v2/auth"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	port := ":10001"
	router := common.NewRouter()

	router.Group("/",
		echo.WrapMiddleware(auth.AuthenticateCASUser),
		middleware.StaticWithConfig(middleware.StaticConfig{
			Root:   "test",
			Index:  "index.html",
			HTML5:  true,
			Browse: true,
		}))

	server := http.Server{
		Addr:           port,
		MaxHeaderBytes: 1024 * 10,
	}

	router.StartServer(&server)

}

// router.Group("/", auth.CheckHeaderBasedAuth,
// 		auth.CheckHeaderBasedAuth,
// 		echo.WrapMiddleware(auth.AuthenticateCASUser),
// 		auth.AuthorizeRequest("read-config", "configuration", func(c echo.Context) string { return "all" }),
// 		middleware.StaticWithConfig(middleware.StaticConfig{
// 			Root:   "web-dist",
// 			Index:  "index.html",
// 			HTML5:  true,
// 			Browse: true,
// 		}))
