    
import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import ViewBtn from "../components/LinkBtn";
import { Col, Row, Container } from "../components/Grid";
import DeleteBtn from "../components/DeleteBtn";

class Saved extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        this.loadBooks();
    }
    loadBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({ books: res.data });
            })
    }
    handleViewClick = link => {
        
        window.location = link;
         
    }
    handleDeleteClick = id => {
        API.deleteBook(id)
            .then(res => {
                console.log("deleted book");
                this.loadBooks();
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <h3>Bookmarked Books</h3>
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book._id}>
                                        <Container>
                                        <h4><strong>{book.title}</strong></h4>
                                        <b>
                                            <span>{"Authors: "}</span>
                                            <span>{book.author.join(', ')}</span>
                                        </b>
                                        </Container>
                                        <br></br>
                                        <Container>
                                        <p><img alt="bookCover" src={book.image ? (book.image) : ("")} />{book.synopsis ? (book.synopsis) : ("No Description Available")}</p>        
                                        <DeleteBtn onClick={() => this.handleDeleteClick(book._id)}/>
                                        <ViewBtn onClick={() => this.handleViewClick(book.link)} />
                                        </Container>
                                        
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h5>You haven't bookmarked anything yet</h5>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Saved;