# video-conference-app
Term project of my Mobile Device Interfaces university pregraduate class. The project is an ionic app which allows video playback with real time chat and can be accessed by browsers and mobile devices.

Το Ionic app αυτού του ζητούμενου το έγραψα με τη χρήση του Angular framework που προσφέρει το Ionic. Πρώτα θα εξηγήσω συνοπτικά τον κώδικα με μερικά screenshots και μετά εξηγήσω πως λειτουργεί η εφαρμογή με screenshots από desktop, κινητό και ταμπλέτα.

Η εφαρμογή έχει μόνο μια σελίδα, την home page. Οπότε έχω αλλάξει μόνο τον κώδικα αυτής της σελίδας. Αρχικά υπάρχει ένα embedded YouTube βίντεο στην αριστερή μεριά της οθόνης όταν η οθόνη είναι μεγάλη ή μέτρια σε πλάτος, αλλιώς στο κέντρο της αν η οθόνη είναι μικρή σε πλάτος. Το βίντεο που είναι embedded είναι αυτό: https://www.youtube.com/watch?v=6xaaeop7gJ8.

Είναι μια βιντεοσκοπημένη διάλεξη του μαθήματος Σήματα και Συστήματα του Alan V. Oppenheim στο πανεπιστήμιο MIT από το 2011. Διάλεξα αυτό το βίντεο γιατί ταιριάζει στο θέμα της πλατφόρμας αφού θέλουμε να μοιάζει με το zoom με το οποίο κάναμε διαδικτυακά μαθήματα. Κάτω από το embedded video υπάρχει το avatar που αντιστοιχεί στον χρήστη της τωρινής περιοχής, δίπλα του βρίσκεται ένα ion-textarea και ένα ion-button που γράφει CHAT πάνω του, όπου ο χρήστης μπορεί να γράψει το σχόλιό του και να το υποβάλλει στο chat πατώντας το κουμπί. Αυτά τα elements φαίνονται στον παρακάτω πηγαίο κώδικα της σελίδας (του αρχείου src\app\home\home.page.html):

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/00be1e36-37ba-45f0-ac08-fe3ce9803bf9)

Μετά είτε στα δεξιά του βίντεο (αν υπάρχει χώρος) ή κάτω από το βίντεο (αν δεν υπάρχει χώρος) φαίνεται το chat στο οποίο εμφανίζονται τα μυνήματα που υποβάλλουν οι χρήστες. Το chat είναι μια ion-list η οποία αρχικά είναι κενή εκτός από το ion-item Chat is empty, write something... που δείχνει πως δεν υπάρχουν μυνήματα ακόμα. Επίσης πάνω από το chat υπάρχει ένα ion-list-header που λέει Events | Chat, όπως προτείνει η εκφώνηση. Αυτά τα elements φαίνονται στον παρακάτω πηγαίο κώδικα της σελίδας (του αρχείου src\app\home\home.page.html):

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/f7ffda6d-15af-4bec-b7f9-175a3d96787d)

Τα μυνήματα προστίθενται στην ion-list (δηλαδή στο chat) με τη typescript συνάρτηση sendMessage() που ενεργοποιείται όταν πατιέται το κουμπί CHAT που αναφέρθηκε νωρίτερα. Η συνάρτησή αυτή βρίσκεται στο αρχείο src\app\home\home.page.ts και ο κώδικάς της φαίνεται παρακάτω:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/9c7ac5a5-d704-4c5e-8d2b-383c0322b0f0)

Ουσιαστικά αν το chat είναι άδειο διαγράφει πρώτα το μύνημα Chat is empty, write something... και μετά προσθέτει στην αρχή της εσωτερικής html της ion-list ένα ion-item με το μύνημα του χρήστη, το username του και το avatar του. Οπότε τα νέα μυνήματα εμφανίζονται στην κορυφή του chat.

Στο κάτω μέρος της εφαρμογής/σελίδας υπάρχει ένα ion-footer, μέσα στο οποίο υπάρχουν ion-tabs. Συγκεκριμένα, υπάρχουν 4 ion-tab-buttons, ένα για κάθε χρήστη. Παρόλο που έκανα μόνος την εργασία, έβαλα 4 χρήστες με usernames User 1, User 2, User 3 και User 4. Δεν έβαλα τη λέξη area στο κείμενο της κάθε καρτέλας όπως έχει η εκφώνηση επειδή δεν φαινόταν σχεδιαστικά ωραίο κατά τη γνώμη μου (δηλαδή αντί για USER 1 AREA έχω User 1 σκέτο). Αυτά τα elements φαίνονται στον παρακάτω πηγαίο κώδικα της σελίδας (του αρχείου src\app\home\home.page.html):

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/e08a4eb5-ec89-4ed3-9613-ff63bc3b566d)

Ανάλογα με το tab που πατήθηκε τελευταίο εμφανίζεται στο chat πως ο αντίστοιχος χρήστης έστειλε το επόμενο μύνημα. Αυτό γίνεται με την συνάρτηση typescript setUser(userID) η οποία ενεργοποιείται όταν πατιέται κάποιο από τα ion-tab-buttons, με την οποία ενημερώνεται το user ID του τωρινού χρήστη. Η συνάρτησή αυτή βρίσκεται στο αρχείο src\app\home\home.page.ts και ο κώδικάς της φαίνεται παρακάτω:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/93b7b7d8-02af-47b6-95e5-9a86f29d5807)

Η συνάρτηση αυτή αλλάζει επίσης το avatar που φαίνεται αριστερά του ion-textarea σε αυτό που αντιστοιχεί στον χρήστη της τωρινής περιοχής. Στο υπόλοιπο αρχείο src\app\home\home.page.ts υπάρχει μια λίστα με τα στοιχεία των χρηστών, δηλαδή το username τους, το avatar τους και το μύνημα που υπήρχε στο text area τους πριν την αλλαγή χρήστη. Επιπλέον υπάρχουν οι μεταβλητές της κλάσης της αρχικής σελίδας και ο κατασκευαστής της κλάσης αυτής. Ο κώδικας του υπόλοιπου αρχείου src\app\home\home.page.ts φαίνεται παρακάτω:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/eabf0e6a-6259-4aab-9c85-d7de03852b60)

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/d38f0273-ba90-4bcb-b8f4-c5e662c1da3f)

Ο κώδικας css βρίσκεται στο αρχείο src\app\home\home.page.scss. Είναι απλός κώδικας css και το μόνο ιδιαίτερο κομμάτι είναι το παρακάτω:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/4a4ebd44-322d-434f-bbcd-a12533fdcdb6)

Με τον κώδικα αυτό αλλάζει το μέγεθος του iframe μέσα στο οποίο είναι embedded το YouTube βίντεο ανάλογα με το orientation και το μέγεθος της οθόνης. Ο υπόλοιπος κώδικας του αρχείου src\app\home\home.page.scss δεν έχει αλλαγές από το default αρχείο που δημιουργεί το Ionic και φαίνεται παρακάτω:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/5da6910c-a883-44e7-948d-8c4e0ac5c7b4)

Στη συνέχεια θα παραθέσω μερικά screenshots χρήσης της εφαρμογής στο Mozilla Firefox από desktop με Windows 10.  Συγκεκριμένα θα δείξω τι κάνει κάθε κουμπί με λεπτομέρειες. Μετά θα παραθέσω screenshots από το emulator του Mozilla Firefox από κινητό και ταμπλέτα αλλά εκεί θα δείξω μόνο το τελικό στάδιο του interaction (δηλαδή πως φαίνεται η εφαρμογή με το βίντεο να παίζει και με μερικά γραμμένα μυνήματα) και όχι τι κάνει το κάθε element.
Όταν ανοίγει η εφαρμογή/ιστοσελίδα στο Firefox φαίνεται έτσι:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/8ea86fd1-3317-4a2d-ab1e-5d9b07720c5d)

Πατώντας το κόκκινο YouTube κουμπί στο βίντεο αρχίζει να παίζει το βίντεο του recorded μαθήματος από το ΜΙΤ. Επιλέγοντας το κουμπί User 3 στο κάτω μέρος της οθόνης επιλέγεται ως χρήστης ο User 3 (ο προεπιλεγμένος χρήστης είναι ο User 1) και ο χρήστης αυτός μπορεί να γράψει το σχόλιό του στο text area που είναι κάτω από το βίντεο. Αυτά φαίνονται στο παρακάτω screenshot:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/a2d675ed-fffa-4719-954c-3fa8688cec98)

Σε αυτό που είναι κυκλωμένο με ροζ βλέπουμε πως άλλαξε το avatar του τωρινού χρήστη από αυτό που αντιστοιχεί στον User 1 σε αυτό που αντιστοιχεί στον User 3. Πατώντας το κουμπί CHAT (κυκλωμένο με κόκκινο) υποβάλλεται το μύνημα και εμφανίζεται στο chat μαζί με το γεγονός πως το έγραψε ο χρήστης User 3 αλλά και το avatar του. Αυτό φαίνεται παρακάτω:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/5143ad27-6716-4177-b035-dce6f576cfe8)

Όπως βλέπουμε, όταν το κουμπί CHAT πατιέται, το text area καθαρίζει. Σημειώνεται πως αν υπάρχει κάποιο μύνημα στο text area που αντιστοιχεί σε ένα χρήστη, πχ τον User 3, και πατηθεί το κουμπί που αλλάζει στην περιοχή ενός άλλου χρήστη, πχ του User 2 πατώντας το κουμπί User 2, το text area καθαρίζει αλλά αν γίνει επιστροφή στη περιοχή του αρχικού χρήση User 3, τότε το μύνημά του που δεν στάλθηκε δεν έχει χαθεί και θα ξαναεμφανιστεί στο text area ώστε να συνεχίσει από αυτό που έγραφε. Αυτό δεν μπορώ να το δείξω κάπως με screenshots αλλά αν τρέξετε την εφαρμογή/ιστοσελίδα θα το δείτε πως έτσι δουλεύει.

Συνεχίζουμε αλλάζοντας στη περιοχή του χρήστη User 2 πατώντας το αντίστοιχο κουμπί και γράφοντας ένα μύνημα. Οπότε βρισκόμαστε σε αυτή την κατάσταση:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/16a28b5e-e9fa-4988-89d4-810f1a87eb93)

Πατώντας το κουμπί CHAT θα υποβληθεί το μύνημα του χρήστη User 2 και θα φαίνεται έτσι:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/555fd653-b264-417e-a68c-5c8f309b352f)

Γράφωντας άλλα δύο μυνήματα, ένα από κάθε από τους υπόλοιπους χρήστες ερχόμαστε στην παρακάτω κατάσταση:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/b195539b-f4c5-4768-99ab-e90304e0af00)

Η καρτέλα του chat θα μεγαλώνει όσο υποβάλλονται μυνήματα μέχρι να καλύψει όλο τον υπόλοιπο χώρο και μετά θα βγάλει scroll bar χωρίς να συνεχίσει να μεγαλώνει. Εδώ φαίνεται η κατάσταση της εφαρμογής/σελίδας μετά από αρκετά μυνήματα για να μη χωράνε στον υπόλοιπο χώρο και χωρίς να γίνει scroll down:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/7c7e02f1-8f6b-4f77-bf35-aa95981a607e)

Και εδώ φαίνεται η ίδια κατάσταση αλλά αφού έγινε scroll down. Θυμηθείτε πως πάνω πάνω φαίνονται τα νεότερα μυνήματα, οπότε όταν γίνει scroll down θα φαίνονται τα πρώτα μυνήματα:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/f40093a3-8cd7-43f7-b4ec-9d56cc88c132)

Τέλος, θα εμφανίσω screenshots της ίδιας κατάστασης από το mobile device emulator του Firefox στα Windows 10. Screenshot από emulated Galaxy Note 20 με Android 11 σε landscape orientation:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/799f6ecc-db3a-4371-b95a-cd5071a527e3)

Note 20 με Android 11 σε portrait orientation:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/83f0eec1-0590-46e9-9795-6862936b02e5)

Το chat και το text area με το κουμπί CHAT και το avatar βρίσκονται πιο κάτω και εμφανίζονται με scroll down με το δάχτυλο (έχω κάνει και scroll down το chat για να φαίνονται παλιότερα μυνήματα):

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/ef7781e0-b5e2-4978-b87e-ec80f7f3c693)

Συνεχίζουμε με screenshot από emulated iPad με iPadOS 14.17.1 σε landscape orientation (παέι και λίγο πιο πάνω αλλά δεν χωράει στην οθόνη μου όλη η emulated οθόνη του iPad):

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/1c74a600-6ed7-425b-ad01-0b7798688c9e)

Όπως βλέπεται έχω γράψει και κάτι στο text area για να δείτε πως δουλεύει και στις mobile συσκευές. Τέλος έχουμε screenshot από emulated iPad με iPadOS 14.17.1 σε portrait orientation (το chat το έχω κάνει scroll περίπου στη μέση):

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/980dd0bf-715f-4b44-bc77-0de07affaf23)

Μπορούσα να έχω το βίντεο να πιάνει όλη το width της οθόνης και το chat να είναι κάτω από το text area αλλά προτίμησα να βάλω το chat στα δεξιά του βίντεο σε οθόνες τέτοιου μεγέθους.
Έτσι φαίνεται ως desktop ιστοσελίδα η εφαρμογή με το αυτόματο dark mode του Mozilla Firefox ενεργοποιημένο:

![image](https://github.com/JohnOiko/video-conference-app/assets/72659858/d346af86-654a-4330-a871-53c2e21bb27d)












