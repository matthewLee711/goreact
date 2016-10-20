package main //make executable

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("Hello World")
	http.HandleFunc("/", handler)
	http.ListenAndServe(":4000", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello!")
}