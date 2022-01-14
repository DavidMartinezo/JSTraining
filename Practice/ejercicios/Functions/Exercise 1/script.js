const mainTag = document.querySelector('div');
 const main = ()=>{
    const article = document.createElement("article");
   //var figure =createfigure("https://cdn.uconnectlabs.com/wp-content/uploads/sites/25/2020/04/J.png","prueba");
   //var aAp= article.appendChild(figure);
    //populate with content from the object properties
return article.appendChild(createfigure("https://cdn.uconnectlabs.com/wp-content/uploads/sites/25/2020/04/J.png","I'm starting to love JS"));
    //return the new element 

}


 createfigure = (uri, description)=>{
     const figure = document.createElement("figure");  
     const imagen = new Image();
       imagen.src=uri;
     const figCaption = document.createElement("figcaption")
      // figCaption.append(description);
      figCaption.innerText=description;
     figure.appendChild(imagen);
     figure.appendChild(figCaption)
  return figure;
}

mainTag.append(main());
//second function is called by the main function  
//create a new figure element 
// populate with an image pointing to the image url defined in the object 
//add a <figcaption> with the image description 
//return the whole figure 
//finally use the querySelector an the append method to the main object in html file 

/*pass the object to the main function 
  pass it to the figure function
  return everything to the main function */
  //img uri and description 


