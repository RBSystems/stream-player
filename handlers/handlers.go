package handlers

import (
	"net/http"
	"os"

	"github.com/labstack/echo"
)

// GetLicenseKey returns the license key env var
func GetLicenseKey(ctx echo.Context) error {
	key := os.Getenv("WOWZA_LICENSE_KEY")

	return ctx.JSON(http.StatusOK, key)
}
