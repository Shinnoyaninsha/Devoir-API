const fetchPromise = fetch("http://localhost:3000/api/posts/");
    
	fetchPromise.then(response => {
		return response.json();
	}).then(listePosts => {
		listePosts.forEach(function(post) {
			let liPost= document.createElement("li");       					
			let aPost = document.createElement("a");   					
			let postauthor = document.createElement("div");             					
			postauthor.textContent = post.author;		   		
            let postText=document.createElement("div");
            postText.textContent=post.content;                				
			aPost.appendChild(postauthor);
			aPost.appendChild(postText);

			liPost.appendChild(aPost); 					   				

			document.getElementById('list_posts').appendChild(liPost); 		
			})}
	);
