package br.com.rhfactor.controller;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.node.ArrayNode;
import org.codehaus.jackson.node.ObjectNode;
import org.codehaus.jackson.node.TextNode;

import br.com.rhfactor.model.User;

@Path("/user")
@Produces(MediaType.APPLICATION_JSON)
@RequestScoped
public class UserController {
	
	private transient ObjectMapper mapper = new ObjectMapper();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public ObjectNode getUser(@PathParam("id") Integer id) {

		ObjectNode map = mapper.createObjectNode();
		ObjectNode usuarioNode = mapper.createObjectNode();
		
		User user = new User();
		user.setId(id);
		user.setName("Usuario " + id);
		
		try{
			usuarioNode = mapper.convertValue(user, ObjectNode.class);
		}catch(Exception e){			
			e.printStackTrace();
		}
		
		map.putPOJO("user", usuarioNode);
		
		return map;
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("list")
	public ObjectNode listUser() {
		
		ObjectNode map = mapper.createObjectNode();
		ObjectNode usuarioNode = mapper.createObjectNode();
		
		ArrayNode arrayNode = mapper.createArrayNode();
		
		
		for(int i=0; i < 10; i++){		
			User user = new User();
			user.setId(i);
			user.setName("Usuario " + i);
			
			try{
				usuarioNode = mapper.convertValue(user, ObjectNode.class);
				usuarioNode.remove("point");
			}catch(Exception e){			
				e.printStackTrace();
			}
			
			arrayNode.add(usuarioNode);
		}
		
		
		map.putArray("users").addAll(arrayNode);
				
		return map;
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("byPoints")
	public ObjectNode getUsersByUser(){
		ObjectNode map = mapper.createObjectNode();
		ObjectNode usuarioNode = mapper.createObjectNode();
		
		ArrayNode arrayNode = mapper.createArrayNode();
		
		
		for(int i=0; i < 10; i++){
			
			User user = new User();
			user.setId(i);
			user.setName("Usuario " + i);
			user.setPoint( i * 2);
			
			try{
				usuarioNode = mapper.convertValue(user, ObjectNode.class);
				
				// Change columns to Chart Style
				usuarioNode.put("label", new TextNode( usuarioNode.get("name").asText() ));
				usuarioNode.remove("name");
				
				usuarioNode.put("value", new TextNode( usuarioNode.get("point").asText() ));
				usuarioNode.remove("point");
				
			}catch(Exception e){			
				e.printStackTrace();
			}
			
			arrayNode.add(usuarioNode);
		}
		
		
		map.putArray("users").addAll(arrayNode);
				
		return map;
	}

}
