package main 

import (
	"encoding/json"
	"fmt"
	"github.com/mitchellh/mapstructure"
)

type Message struct {
	Name string		 `json:"name"`
	Data interface{} `json:"data"`
}

type Channel struct {
	Id	 string	`json:"id"`
	Name string `json:"name"`
}

func main() {
	//decode josn
	recRawMsg := []byte(`{"name":"channel add",` +
		`"data":{"name":"Hardware Support"}}`)

	var recMessage Message
	//decode and store into recMessage
	//fill go struct from json
	//need to use reference so can modify in memory
	err := json.Unmarshal(recRawMsg, &recMessage)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf("%#v\n", recMessage)

	// reencode message
	if recMessage.Name == "channel add" {
		channel, err := addChannel(recMessage.Data)
		var sendMessage Message
		sendMessage.Name = "channel add"
		sendMessage.Data = channel
		//create json from go struct
		sendRawMsg, err := json.Marshal(sendMessage)
		if err != nil {
			fmt.Println(err)
			return
		}
		fmt.Printf(string(sendRawMsg))
	}
}

func addChannel(data interface{}) (Channel, error){
	var channel Channel 
	//Use mapstructure to replace these two lines
	// channelMap := data.(map[string]interface{})
	// channel.Name = channelMap["name"].(string)
	err := mapstructure.Decode(data, &channel)
	if err != nil {
		return channel, err//returns at end of function
	}
	channel.Id = "1"
	fmt.Printf("%#v\n", channel)
	return channel, nil
}