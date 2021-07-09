const randomQuotes = [
    '“Be yourself; everyone else is already taken.” <br> ― Oscar Wilde',
    '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.” <br>― Albert Einstein',
    '“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”<br>― Marilyn Monroe',
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." <br>― Nelson Mandela',
    '"The way to get started is to quit talking and begin doing." <br>― Walt Disney',
    '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."<br>― Steve Jobs',
    '"If life were predictable it would cease to be life, and be without flavor." <br>― Eleanor Roosevelt',
    '"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough." <br>― Oprah Winfrey',
    '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success." <br>― James Cameron',
    '"Life is what happens when you\'re busy making other plans." <br>― John Lennon',
    '"You must be the change you wish to see in the world." <br>― Mahatma Gandhi',
    '"First they ignore you, then they laugh at you, then they fight you, then you win." <br>― Mahatma Gandhi',
    '"Those who are prepared to die for any cause are seldom defeated." <br>―Pandit Jawarharlal Nehru',
    '"Long years ago we made a tryst with destiny, and now the time comes when we shall redeem our pledge, not wholly or in full measure, but very substantially. At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom." <br>― Pandit Jawarharlal Nehru',
    '"A moment comes, which comes but rarely in history, when we step out from the old to the new; when an age ends; and when the soul of a nation long suppressed finds utterance" <br>―Pandit Jawarharlal Nehru',

    '"We have to shed mutual bickering, shed the difference of being high or low and develop the sense of equality and banish untouchability. We have to restore the conditions of Swaraj prevalent prior to British rule. We have to live like the children of the same father." <br>― Sardar Vallabhbhai Patel',
    '"A war based on Satyagraha is always of two kinds. One is the war we wage against injustice and the other we fight against our own weaknesses." <br>―Sardar Vallabhbhai Patel',
    '"Where the mind is led forward by thee into ever-widening thought and action-Into that heaven of freedom, my father, let my country awake." <br>― Rabindranath Tagore',
    '"Revolution is an inalienable right of mankind. Freedom is an imperishable birthright of all."<br> ― Bhagat Singh',
    '"A rebellion is not a revolution. It may ultimately lead to that end."<br>― Bhagat Singh',
    '“The purpose of our lives is to be happy.” <br>— Dalai Lama',
    '“Get busy living or get busy dying.” <br>— Stephen King',
    '“You only live once, but if you do it right, once is enough.” <br>— Mae West',
    '“Many of life’s failures are people who did not realize how close they were to success when they gave up.”<br>– Thomas A. Edison',
    '"Everything you can imagine is real."<br> – Pablo Picasso',
    '"Simplicity is the ultimate sophistication."<br> – Leonardo da Vinci',
    '"Normality is a paved road: it’s comfortable to walk but no flowers grow."<br> – Vincent van Gogh',
    '"I have nothing to lose but something to gain."<br> – Eminem',
    '"Don\’t you know your imperfections is a blessing?"<br> – Kendrick Lamar',
    '"Reality is wrong, dreams are for real."<br> – Tupac',
    '"Never let your emotions overpower your intelligence."<br> – Drake',
    '"Hate comes from intimidation, love comes from appreciation." <br> – Tyga',

];


document.querySelector("button").addEventListener("click", changeRandomQuotes);
function changeRandomQuotes(){
    const randomQuotesIndex = parseInt(Math.random() * randomQuotes.length);
    document.getElementById("quote").innerHTML = randomQuotes[randomQuotesIndex];
}