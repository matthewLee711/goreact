package main //make executable

import (
	"fmt"
	"github.com/gorilla/websocket"
	"net/http"
)

var upgrader = websocket.Upgrader {
	ReadBufferSize: 	1024,
	WriteBufferSize:	1024,
	CheckOrigin:		func(r * http.Request) bool {return true},
}

func main() {
	fmt.Println("Hello World")
	http.HandleFunc("/", handler)
	http.ListenAndServe(":4000", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	// fmt.Fprintf(w, "Hello!")
	socket, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println(err)
		return
	}
	//start reading messages from websocket
	for {
		msgType, msg, err := socket.ReadMessage()
		if err != nil {
			fmt.Println(err)
			return
		}
		fmt.Println(string(msg))//msg is a byte array
		//echo message back to client
		//You can do an error checking if statement while assigning
		//AND send message back to client
		if err = socket.WriteMessage(msgType, msg); err != nil {
			fmt.Println(err)
			return
		}
	}
}