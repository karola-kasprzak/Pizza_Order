Projekt z użyciem jQuery.


- Imię
- Nazwisko
- Ulica
- Nr domu/mieszkania
- Kod Pocztowy
- Miasto
- Pizza (do wyboru 5 rodzajów Pizzy – każda w innej cenie) - pole to ma ustawioną domyślną
wartość "-- Wybierz Pizzę --". Po wyborze zamawianej pizzy, powinna wyświetlić się jej cena
(np. jako tekst w paragrafie)
- 2 pola wyboru sosów (pomidorowy i czosnkowy) (najlepiej jako checkbox'y)
- Zgoda na przetwarzanie danych – checkbox (musi być zgoda na relizacje zamówienia)
Za pomocą jQuery zrób walidację formularza. Walidator ma sprawdzać:
- czy wszystkie pola zostały wypełnione? Jeśli nie, to zwracać odpowiedni komunikat
- czy została wybrana Pizza przy zamówieniu? Jeśli nie, to zwracany odpowiedni komunikat
Na końcu walidator ma stworzyć obiekt zamówienia np. w formacie JSON i wyświetlić go w konsoli