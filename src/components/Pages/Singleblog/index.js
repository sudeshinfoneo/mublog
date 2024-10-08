import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog1 from '../../../assets/img/single_blog_1.png.webp';
import Author from '../../../assets/img/author.png.webp';
import SubcribeModal from "./subcribe";

const SingleBlog = () => {
    const [showModal, setShowModal] = useState(false);
    const [reply, setReply] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        console.log("Replies updated:", replies);
    }, [replies]);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (reply && name && email) {
            const newReply = { name, email, comment: reply };
            console.log("New reply added:", newReply);
            setReplies([...replies, newReply]);
            setReply("");
            setName("");
            setEmail("");
            handleClose();
        }
    };

    return (
        <>
            <section className="blog_area single-post-area all_post">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 posts-list">
                            <div className="single-post">
                                <div className="feature-img">
                                    <img className="img-fluid" src={Blog1} alt="Blog" style={{ height: 400, width: 1500, padding: 10 }} />
                                </div>
                                <div className="blog_details">
                                    <h2>Second divided from form fish beast made every of seas all gathered us saying he our</h2>
                                    <ul className="blog-info-link mt-3 mb-4">
                                        <li><a href="#"><i className="far fa-user"></i> Travel, Lifestyle</a></li>
                                        <li><a href="#"><i className="far fa-comments"></i> 03 Comments</a></li>
                                    </ul>
                                    <p className="excert">
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower?
                                    </p>
                                    <div className="quote-wrapper">
                                        <div className="quotes">
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                                        </div>
                                    </div>
                                    <p>
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training?
                                    </p>
                                </div>
                            </div>
                            <div className="navigation-top">
                                <div className="d-sm-flex justify-content-between text-center">
                                    <p className="like-info"><span className="align-middle"><i className="far fa-heart"></i></span> Lily and 4 people like this</p>
                                    <div className="col-sm-4 text-center my-2 my-sm-0">
                                        <p className="comment-count"><span className="align-middle"><i className="far fa-comment"></i></span> 06 Comments</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-author">
                                <div className="media align-items-center">
                                    <img src={Author} alt="Author" />
                                    <div className="media-body">
                                        <a href="#">
                                            <h4>Harvard Milan</h4>
                                        </a>
                                        <p>Second divided from form fish beast made. Every of seas all gathered us saying you're, he our dominion twon Second divided from.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-form">
                                <h4>Leave a Reply</h4>
                                <form className="form-contact comment_form" id="commentForm" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control w-100"
                                                    name="comment"
                                                    id="comment"
                                                    cols="30"
                                                    rows="3"
                                                    placeholder="Write Comment"
                                                    value={reply}
                                                    onChange={(e) => setReply(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    placeholder="Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="load_btn">
                                        <button type="submit" className="btn_1">Submit</button>
                                    </div>
                                </form>
                            </div>

                            <div className="replies">
                                {replies.length > 0 ? (
                                    replies.map((reply, index) => (
                                        <div key={index} className="p-3 bg-light rounded mb-3">
                                            <p><strong>{reply.name}</strong> <em>({reply.email})</em></p>
                                            <p>{reply.comment}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p></p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SubcribeModal show={showModal} handleClose={handleClose} />
        </>
    );
};

export default SingleBlog;
