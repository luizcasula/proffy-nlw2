import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://scontent.fjpr1-1.fna.fbcdn.net/v/t1.0-9/37261502_255711438353290_6618395043784818688_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=uHiCC3z155UAX94g_Gi&_nc_ht=scontent.fjpr1-1.fna&oh=4367e5b7925ee5f82773503b52e0e3c6&oe=5F4F4B16"
                    alt="bc raff"
                />
                <div>
                    <span>BCRAFF BRO</span>
                    <span>Arte da putaria</span>
                </div>

            </header>
            <p>
                Matue não é trap bro
                           <br /><br />
                           ae pineapple, devolve meu dinheiro
                       </p>
            <footer>
                <p>
                    Preço/hora
                               <strong>
                        R$ 100000,00
                               </strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                               Entrar em contato
                           </button>
            </footer>

        </article>
    );
}

export default TeacherItem;
