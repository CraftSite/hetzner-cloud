import Hetzner from require "hetzner"
import p from require "moon"
import decode, encode from require "lunajson"

API_KEY = assert(io.open ".key")\read "*a"

api = Hetzner API_KEY

--p assert api\new_server 
--	name: "AchJodelMirDochEinen"
--	server_type: "cx11"
--	image: "ubuntu-16.04"

p assert api\servers!
