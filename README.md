## Aplikacja przeglądarkowa “lazyloading”

Aplikacja przeglądarkowa “lazyloading” - zadanie rekrutacyjne

Aplikacja pobiera z usługi zewnętrznej JSON danych ( minimum 100 elementów) i jej zadaniem
jest wyświetlać te elementy na stronie ze spełnieniem poniższych warunków:
1. Ładowane na ekranie są tylko te elementy, które są widoczne dla użytkownika
a. chodzi o załadowanie przede wszystkim obrazka, który posiada każdy z
elementów
2. Widok RWD - aplikacja ma reagować na zmiany szerokości i wysokości przeglądarki
. w zależności od tego ma dostosowywać liczbę widocznych elementów jakie są
ładowane
a. bazując na opisanej niżej usłudze można wykorzystać obrazki o rozdzielczości
i.136x77 dla szerokości <=800
ii.435x276 dla szerokości >800
b. liczba elementów w poziomie powinna być maksymalna dla danej szerokości (tyle ile
się zmieści na ekranie użytkownika)
3. Kolejne elementy są doładowywane po akcji użytkownika ( scrollowanie w dół )
. w przypadku szybkiego przewijania pomijane są te elementy, które znikają z ekranu
nim zdążą się załadować
a. jeśli jakieś elementy zostały pominięte w ramach powyższego, to ponowne
przesunięcie na widok, który zawiera te elementy powinien skutkować ich pobraniem
b. doładowywanie elementów nie powinno skutkować “skakaniem” strony ( tj.
przesuwaniem siatki elementów, jakie widzi użytkownik).

## Instrukcja instalacji:

1. git clone https://github.com/tobiasz230/lazyloading.git
2. npm i
3. npm run start
4. http://localhost:3000/