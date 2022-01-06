import React from 'react'

export const ContactMe = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Контакты</h2>
            <span className="section__subtitle">Связатся</span>

            <div >
                <div className="contact__container container grid">
                    <div className="contact__information">
                        <a href="https://www.instagram.com/kate_smile_sport" target="_blank" className="contact__information">
                            <i className="uil uil-instagram contact__icon"></i>

                            <div>
                                <h3 className="contact__title">Напишите мне</h3>
                                <span className="contact__subtitle">www.instagram.com/kate_smile_sport</span>
                            </div>
                        </a>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Залы</h3>
                            <span className="contact__subtitle">Fit4You</span>
                            <span className="contact__subtitle"><br />улица Владимира Мономаха, 17а, Днепр</span>
                            <span className="contact__subtitle"><br />проспект Гагарина, 105б, Днепр</span>
                        </div>
                    </div>
                </div>
                {/*                 <form className="contact__form grid"
                    method="POST">

                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label for="" className="contact__label">Name</label>
                            <input type="text" autocomplete="off" name="YPqjbf" className="contact__input" />
                        </div>
                        <div className="contact__content">
                            <label for="" className="contact__label">Phone</label>
                            <input type="tel" autocomplete="off" name="YPqjbf" className="contact__input" />
                        </div>
                    </div>
                    <div className="contact__content">
                        <label for="" className="contact__label">Project</label>
                        <input type="text" autocomplete="off" className="contact__input" />
                    </div>
                    <div className="contact__content">
                        <label for="" className="contact__label">Message</label>
                        <textarea name="" id="" autocomplete="off" cols="0" rows="7" className="contact__input"></textarea>
                    </div>

                    <div>
                        <a href="javascript: document.training.submit()" className="button button-flex">
                            Send Message
                            <i className="uil uil-message button__icon"></i>
                        </a>
                        <input type="hidden" name="act" value="order" />
                    </div>
                </form> */}
            </div>
        </section>
    )
}
