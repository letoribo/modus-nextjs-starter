// Code generated by Modus. DO NOT EDIT.

package main

import (
	"github.com/hypermodeinc/modus/sdk/go/pkg/console"
)

func main() {}

//go:export sayHello
func __modus_SayHello(name *string) string {
	return SayHello(name)
}

//go:export getRandomQuote
func __modus_GetRandomQuote() *Quote {
	r0, err := GetRandomQuote()
	if err != nil {
		console.Error(err.Error())
	}
	return r0
}

