class Book {
    constructor(
        title,
        author, 
        releaseDate, 
        pages, 
        status, 
        codigo
    ){
        this.title=title,
        this.author=author,
        this.status-=status,
        this.codigo=codigo
        

    }
   updateStatus (newStatus){
this.status=newStatus;
   }
}

export default  Book;