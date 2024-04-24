package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

// Lobby structure
type Lobby struct {
	ID      string
	Players []*websocket.Conn
	Count   int
}

var lobbies = make(map[string]*Lobby)

func main() {
	r := gin.Default()
	r.GET("/ws", func(c *gin.Context) {
		wshandler(c.Writer, c.Request)
	})
	r.Run(":8080")
}

func wshandler(w http.ResponseWriter, r *http.Request) {
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		return
	}
	defer ws.Close()

	// Handle WebSocket connections
	for {
		_, message, err := ws.ReadMessage()
		if err != nil {
			break
		}
		fmt.Println(message)
		// Handle incoming messages
		// For example, parse message to join/create lobby, increment/decrement count
	}
}
