// handlers.go
package handlers

import (
	"net/http"
	"sync"

	"github.com/gin-gonic/gin"
)

// global variable to store the count
var count int
var mutex sync.Mutex // Mutex to make the increment operation thread-safe

// IndexHandler handles requests to the root URL
func IndexHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Welcome to the backend!",
	})
}

// IncrementHandler handles requests to increment a variable
func IncrementHandler(c *gin.Context) {
	mutex.Lock()
	count++
	mutex.Unlock()
	c.JSON(http.StatusOK, gin.H{
		"message":  "Variable incremented",
		"newCount": count,
	})
}
