const FinalPageText = [
    {
      type: "heading",
      eng: "Thank you for your answers",
      lat: "Paldies par sniegtajām atbildēm!",
    },
    {
      type: "body",
      eng: (
        <div>
        <p>One last step.</p>
        <p>To ensure the privacy of your data, please send them to me via e-mail.</p> 
        <p>How should you do that?</p>
        <ol>
        <li>At the end of the questionnaire, your answers should automatically download with the filename "name_data.csv".</li>
        <p style={{marginTop: 10, marginBottom: 10, fontSize: "11pt"}}>If you do not see such file in your download folder, please press "Export results" button.</p> 
        <li>Next, press the button "Send Email" and your default e-mail browser will automatically open (this may take some time) with a preprepared email to send to me.</li>
        <p style={{marginTop: 10, marginBottom: 10, fontSize: "11pt"}}>If you use another email besides the default, then open your standard email and send me and email with the file "name_data.csv" attached.</p> 
        <li>In this email, attach the downloaded results file "name_data.csv" (Which you can find in your downloads folder)</li>
        <br /> 
        <li>Send the email and I will receive your answers</li> 
        </ol>
        </div>
      ),
      lat: (
        <div>
        <p>Vēl pēdējais solis.</p>
        <p>Lai pasargātu Tavus datus un nodrošinātu to privātumu, nepieciešams, lai Tu atsūti savas atbildes man e-pastā.</p> 
        <p>Kā to darīt?</p>
        <ol>
        <li>Tavā datorā automātiski ir lejupielādēts fails ar nosaukumu “vārds_data.csv”.*</li>       
        <li>Tālāk spied pogu “Nosūtīt e-pastu” un automātiski atvērsies Tava noklusētā e-pasta logs ar sagatavi nosūtīšanai man.**</li>
        <li>Šājā e-pastā pievieno lejupielādēto failu “vārds_data.csv” (to atradīsi mapē "Lejupielādes" (Downloads)).</li> 
        <li>Nosūti e-pastu, un es uzreiz saņemšu Tavas atbildes.</li>
        </ol>
        <p style={{marginTop: 10, marginBottom: 10, fontSize: "11pt"}}>*Ja pie savām lejupielādēm neredzi šādu failu, tad spied pogu “Eksportēt rezultātus”.</p>
        <p style={{marginTop: 10, marginBottom: 10, fontSize: "11pt"}}>**Ja izmanto citu e-pastu nekā noklusēto, tad atver to un atsūti man epastu manuāli, pievienojot failu "vārds_data.csv".</p>
        </div>
      ),
    },
  ];

export default FinalPageText;