import "./Content.css"
import Img1 from './assets/rachel-friends.gif'
import Img2 from './assets/seul-friends.gif'
import Img3 from './assets/meme.png'
import Img4 from './assets/joe.jpg'
function Content() {
    return (
        <div className="Content">
            <section id="poczatek">
                <h1>Sieeeemano! Witam w mojej apce na grafika do BSE!</h1>
                <p>Sorki za taką apke ale nie mam za wiele czasu na jej wykonanie więc jest w formie możliwie
                    najprostszej i najszybszej dla mnie do wykonania.</p>
                <p>Żeby zdjęcia w apce się ładnie wyświtlały polecam odpalić ją na kompie bo niestety wersja mobilna
                    kosztowała by mnie z pare godzin pracy więcej :(</p>
            </section>
            <section id="dlaczegoja">
                <h1>Dlaczego ja?</h1>
            <div className="verticalContainer">
                <img src={Img1}/>
                <p className="half">
                    A no bo chce sobie pografikować, jakoś mnie pewnego dnia natchnęło, żeby się pakietu Adobe nauczyć,
                nigdy nie byłem w tym dobry a poczucie estetyki u mnie nie istnieje, ale zawsze lepiej umieć niż nie umieć.
                Na pewno lubie zapierdalać najlepiej za darmo, a jako że niestety nie mamy projektu związanego z kopaniem rowów
                na budowie za 0zł/h to od biedy może być i to BSE.
                </p>
            </div>
            </section>
            <section id="ulubiona">
                <h1>Ulubiona postać</h1>
                <div className="verticalContainer">
                <p className="half">
                    Deal with it
                </p>
                    <img src={Img4}/>
                </div>
            </section>
            <section id="dlaczegobse">
                <h1>Dlaczego BSE?</h1>
                <p>
                    A no nie byłem nigdy na kursie i pewnie głównie dlatego, chciałbym się zaniedługo na jakiś wybrać,
                    a BSE pozwoli mi trochę bardziej poznać międzynarodową strone Bestu do której byłem wcześniej nieco
                    uprzedzony ze względu na kurwienie na miedzynarodówke na większości środowych.
                    BSE jest też projektem swego rodzaju wyjątkowym, który może nie być organizowany co roku dlatego nie
                    chce zmarnować okazji na niezapierdalanie na nim. A no i jeszcze dlatego że piotruś debil też ma podobno
                    zaaplikować to jak się dostanie to na 99% rezygnuje z organizacji tego projektu.
                </p>
            </section>
            <section id="dyspozycyjnosc">
                <h1>Dyspozycyjność</h1>
                <div className="verticalContainer">
                    <p className="half">
                        Na tą chwilę jestem w 100% free i moge sobie robić co chce, ale możliwe że będę pracował co może wpłynąć
                        w jakimś stopniu na prace podczas projektu. A no i to też zależy jak wstane. Tak to oczywiście
                        skłonny do zapierdalania jestem.
                    </p>
                    <img src={Img2}/>
                </div>
            </section>
            <section id="meme">
                <h1>Meme Time</h1>
                <img src={Img3}/>
            </section>
        </div>
    );
}

export default Content;