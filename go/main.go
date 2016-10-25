package main //make executable

import (
	"fmt"
	"github.com/gorilla/websocket"
	"github.com/mitchellh/mapstructure"
	"net/http"
)

type Message struct {
	Name string		 `json:"name"`
	Data interface{} `json:"data"`
}

type Channel struct {
	Id	 string	`json:"id"`
	Name string `json:"name"`
}

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
	fmt.Fprintf(w, "good")
	socket, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println(err)
		return
	}
	//start reading messages from websocket
	for {
		// msgType, msg, err := socket.ReadMessage()
		// if err != nil {
		// 	fmt.Println(err)
		// 	return
		// }
		var inMessage Message
		if err := socket.ReadJSON(&inMessage); err != nil {
			fmt.Println(err)
			break
		}
		fmt.Printf("%#v\n", inMessage)
		switch inMessage.Name {
		case "channel add":
			err := addChannel(inMessage.Data)
			if err != nil {
				outMessage = Message{"error", err}
				if err := socket.WriteJSON(outMessage); err != nil {
					fmt.Println(err)
					break
				}
			}
		case "channel subscribe":
			subscribeChannel()
		}
		//fmt.Println(string(msg))//msg is a byte array
		//echo message back to client
		//You can do an error checking if statement while assigning
		//AND send message back to client
		// if err = socket.WriteMessage(msgType, msg); err != nil {
		// 	fmt.Println(err)
		// 	return
		// }
	}
}

func addChannel(data interface{}) (error){
	var channel Channel 
	//Use mapstructure to replace these two lines
	// channelMap := data.(map[string]interface{})
	// channel.Name = channelMap["name"].(string)
	err := mapstructure.Decode(data, &channel)
	if err != nil {
		return err//returns at end of function
	}
	channel.Id = "1"
	fmt.Printf("%#v\n", channel)
	return nil
}

func subscribeChannel(){
	
}