import decode, encode from require "lunajson"
import request from require "ssl.https"
import sink from require "ltn12"
import source from require "ltn12"

--   _   _      _                       
--  | | | | ___| |_ _____ __   ___ _ __ 
--  | |_| |/ _ | __|_  | '_ \ / _ | '__|
--  |  _  |  __| |_ / /| | | |  __| |   
--  |_| |_|\___|\__/___|_| |_|\___|_|   
--  

API_URI = "https://api.hetzner.cloud/v1"

class Hetzner
	new: (api_key) =>
		@api_key = api_key

	_request: (connection={}) =>
		body = {}
		connection.sink = sink.table body
		connection.headers or= {}
		connection.headers.authorization = "Bearer #{@api_key}"
		success, code, headers = request connection
		if success
			if code ~= 200
				return nil, "status code #{code} returned\n#{table.concat body}", {
					:success
					:code
					:headers
					body: decode table.concat body
				}
			else
				return {
					:success
					:code
					:headers
					body: decode table.concat body
				}
		else
			return nil, "request failed\n#{code}"

	get: (uri_tail) =>
		@_request
			url: "#{API_URI}/#{uri_tail}"
	
	post: (uri_tail, body) =>
		body = encode body
		@_request
			url: "#{API_URI}/#{uri_tail}"
			method: "POST"
			source: source.string body
			headers:
				["content-type"]: "application/json"
				["content-length"]: #body

	servers: =>
		(assert @get("servers")).body.servers
	
	new_server: (json) =>
		@post "servers", json
	
{:Hetzner}
