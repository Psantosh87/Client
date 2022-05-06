import React from 'react'

const Cardata = [{
    "title": "Project Title biggy title no no big tis...",
    "authorname": "Author Name",
    "image": "card/Rectangle_1.png",
    "date": "20-May-2022",
    "like": "400",
    "view": "1002",
    "save": "1002",
    "comment": "1098"
  },
  {
    "title": "Project Title biggy title no no big tis...",
    "authorname": "Author Name",
    "image": "card/Rectangle_1.png",
    "date": "20-May-2022",
    "like": "400",
    "view": "1002",
    "save": "1002",
    "comment": "1098"
  }
]
























const Cards = () => {
    return (
        <div className="row_pms">
            {/* parent card */}
            <div className="column_pms">
                <div className="content_pms_add">

                    <div></div>

                </div>
            </div>
            {/* parent card */}

            {Cardata.map((item) => <div class="column_pms">
                <div className="content_pms">
                    <img src={item.image} alt="Lights" style={{ width: "100%" }} />
                    <div className="card_cross"><img className="card_cross_image" src="/icons/cross.svg" alt="Lights" style={{ width: "100%" }} /></div>
                    <div className="card_checkbox"><input className="checkbox_input" type="checkbox" /></div>
                    <div className='card_content'>
                        <div className='card_date'>{item.date}</div>
                        <div className="card_title">{item.title}</div>
                        <div className="card_author">{item.authorname}</div>
                        <div className='remark'>
                            <div className="remark_item"><span> <img className="card_image" src="icons/heart.svg" alt="mail" />{item.like}</span></div>
                            <div className="remark_item"><span> <img className="card_image" src="icons/view.svg" alt="view" />{item.view}</span></div>
                            <div className="remark_item"><span> <img className="card_image" src="icons/save.svg" alt="save" />{item.save}</span></div>
                            <div className="remark_item"><span> <img className="card_image" src="icons/comment.svg" alt="comment" />{item.comment}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Cards