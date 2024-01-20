function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0||Number(fano.value)> ano){
        window.alert('[ERRO]VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex [0].checked){
        gênero = 'Homem'
        if(idade>=0 && idade < 10){
            // Criança
            img.setAttribute('src','https://lh3.googleusercontent.com/pw/ABLVV85fj5jGc5dlxxF9BsNkfQxCCBsGRB_7kfOqObZy9BQuxXUgd7897W3vAglqQFvy2i_BE6499v9bpJ8jXUkVTL0AghuolN950Y9TqAoIPDF1WDPt_vz50uZykrEsgQXOR8d4pfJ2hNyZb29LPW_r8dwgmsXPfGbnPYzm3OVCTD5Iy7evwl-KjU9L68Xth6kB9Fv8jcpZj_AVKn8RVMLFX5GMtflIWUSLkUeeOcnMkVzMqkkqwpFxZkbyXYpICRA9rpuplxaxj0Nc-4KISCjQC8XoR9jz3KKYoejOYNTsUEex85itiJdmO3TnM6g9fUADWo9-b5X1h3X_MswSaFNIN1KlsAIMYbLB3O6X93MEHdlRO9LLDDYjGaZsG_YP8yPuJq8T8oiYC-haeQ70ir5j8GyfUHf4yOUjw56mwJ4ANxOvtpefJOWwbSeycd93Tqj9KH4CHilNEKtArlWIY_v0JPPhKp8o1HPMWs4NhFfrHxjorCDZW5PMHdoCWv9L-7qmvYaVoRxq5BS09YfHOVVstRehUVhbHwLPfRgrxfLpFoqo6Egq9osmxVqe4_tP_jZrSWWtI7zuk8B0d-vqeSbvX6Z1FoGRq8q7PiixXKQAVJzFLpbeEs32ZcP3Tp8MSYtxsY7631tgOlvKjeIfbfhvRP_2skn_HK2MnVS8_ugp8k7YrExsiMVFrtp13upO_u8bP_QdVznenwHGJGew9513GvvxtE9w_q2lJyoUKuRkFH1EO3bLG64Fy-3-6szFOaG-T3fhMxnFaAZ-MyUij8XJC0qcYkJFf6KV-muVXDz_Iox2S5UxqLAY1qX2tKOd8hAZwC1cl6ilYB0E08nQDxr98SBxOfYjHaQPEMsQKj4AoSxsGMMSUO49jD54trHAPXLBYNYJYMo=w200-h133-s-no-gm?authuser=0')
        }else if (idade<21){
            // Jovem
            img.setAttribute('src','https://lh3.googleusercontent.com/pw/ABLVV85RbIQ7v1tGPQTX5xA_m_E2WG8Fgja3PgiyHqqq7Gwbm8vXRQWInPYkwf_0_IKTdGCdLdujDjqwKwo99b8fPrMog485dgLkZF4XO56WJyvrpNGtiBmKzAY_XknHwYfU-iZ_j0Akqw2eQZcUrDZ50LhhYVfbC109uZbd0z-wxdUkq1I53lzsXOv_pJNToRyeiza8vZ-YNvPhO-g136Dhfm-zdhOW61Maodrxy8R-BXXqQJuqxf0jXh3KoQbebF03mAYRbN4Lc3QUv_rTlOyuWY48ysXySIOWS6FsAcClb8LdAZseGTpRT_5BqB83zBguU37RjB-f0ZPnQwsc1b6E7SPhQiOI9Uq8D9dLEhdHGCwscHIB6y3oS7Y4EWp0tmZ6gfBJ_fAcrUSzcV3IapYNjNY5wB8L1s3a2g267Sm4bQyvAnc9quA75rjf9tRLleernj5BCeDkYcYQXBXp-ZtzZ71K3YygDQvtGldhWcOzZi1TkzVP7xuwV0Jbcwg3XFDaT4BeO2DOwZesFHohv_rAL_lAd96rmWqvAwRYYxYoOhEow2YkGRQuR5KcQ14n1hBaSm9flxWo4gvhBoaeTxOF_0udBLxNMgAHqVJD8aWUAjJ4gcn-r5QIctXb9Tcu_PA-kb9bKQP_Ue2oHTW0whrHdAundF4JQCOFyRRdnuisq-Iyl3yJaBvb5oVC9WSzcicNVcRzFCqEwu5S-mwFi7Ca8iX02zuGIVwnGnqPf9UiQnlYnFNYv_VbHxOHeAyMLyxaI1vOaiDb3c0fTCcC4xFXJd8y27u48Ua4DJQ4Ezwd82J-FfsPTHvyXq3uX_tf5aaYw7mxpw6pQCu8cX4o2twXvsf2HzPEgtRGD4M6hYF0pCmwAJwZCXacNj2OovQZZQF019WaPN0=w200-h279-s-no-gm?authuser=0')
        }else if (idade < 50){
            // adulto
            img.setAttribute('src','https://lh3.googleusercontent.com/pw/ABLVV87-BZnqJhvM_UjlfRwrAmbDZEO-vqqwjXv1m4GuBv6V1RB6kQupAaWE0NouXJnJlVEfklHbcbVIpcN0XpsV0UJet00s1A_i5PZizFHtt6bSlik81ZhEXPIQPWZkIp3fooGJxnwYUMdanh3ndfW9q6-72e2OKYkralqvx1wKit7DPi6L03shcdQc3v5JDrMysCPIMcgeHnQGmJAj7ItpOHb6lD53zrU57TZt8XEcUmjw9zn1EE7KL079U2zCcZJKoLcTJc5sjKY5oulQW0pEe1nf1kzzAkqi-9CMY6GhoVqlXn6J8mT50jobB1ahwZ3v4C4kSjmBYihFJLMYFJRM4-6FitsSXZLNdNAABz22g5izfCED5QTj-rYcSxHwMROyhqHBG1t7ap2emm6fxTnqGAVwWlywI-2QaIlVrJULy-JaHkwhB_VD64N8DVRVLAdaqyvXJpqSl8PC3TXLqCpctCK7MO4t0H5AdHYv0t4vAaCI1yG6V-DOcmFr0TAvZX9nJuYJ1vTpuMag0QJSrwRqw96xmerUnWzNbFUOdeKGA4XEgneH4BEplcLujwMfKaj1ueEMKtChBJmqQjlG19fUp9dbqT_xAZRgaREn0q2XP9Jp8qskpCkO_1vXTVUgffhag0KhcRUsYi4z-PeMR7k7xAmqXBObLiLJeuT8WRkq61bXu7YQO0IMhHs5ajaDN7jkVRtRCiCqQ3q0Xx7P15vCWkNSKUrnzWSerBI8Gt6mzYY3lKy5hnXc6ktSH8GxFCYIwMBWUxrf4UUxlmHK7MZ5O9OpYA_GyzxIwcxM9NuitijMUssuS0Xq4K_bBSnxeAZluakFNgRfQ2Pifhz3pqkdwRMefz5c6B79VK3ooe5q86HV0839TlvuDATGNUolk8FkZV-g8as=w200-h150-s-no-gm?authuser=0')
        }else{
            // Idoso
            img.setAttribute('src','https://lh3.googleusercontent.com/pw/ABLVV85f-U6dL4F2dajD_rdQkhcehbF0HaO1Vn9hievi1Yo7HTzd15OJczyI8rrskYQ0PCQnrKMo3etuGfuRs-RY0GeXrtvpApdGHDB1oQxoagXkEcTWru_x7E-81B-H-4QQ0FtCifG3wEkdi78ag9AxRvfh9EYoYNfYjpkfqtMMB-hleEqJy08IMQOm6L-oO2Y1y9keJlB8ugugJyIqngOrftrRUP90Eyd3r3yi5vtXu3xgU2MUJzQH8XVJgurPcK-b822nGXE2nBtMoSwlrgJYRlbUBBzl36dcpctHqcHT__dfsdtMJNe1e_ul5onqRp1UOp8ZgVgvgMItzaSUV8VPL71mSsGOwWOlbT61z8rcDFT6PjWzr2OxzSDwSNUkIT0pYLsXCALe6Ej12et_AizAS6M3EpMcw9pyToTx5ZMWWu258f6Vk38lI7ONjeFqeC-vRmo_g6sw6g1AJeRab-bPlG8pYi47gEwZrI-lKR80tEGbVLVcMudHLOUNxkWh7U1yT3cwcCq1xBI2Ph0lpN_ULVnSNSw_yrPyxKmWY3N2gCbqd-l8cDJ92qvdZG8Dsa03tfuoUx9dX1hLt6_8F088WgnUQTRT3JEwrAREVnN4xg8RmZce2OQMIVcNo-mrXbTykcHEMawFUbkWsk1HylBYyylVBEBQwx68ICOPfNuZBMBHIE6FwQS6h_7pnQHMRcen3kJty1cku6mg536UPbHnDQglkUjJ0josSd1_rfA5mH8pES-dbfZmPygmtoY3SPWXFZgvCD9zixHgyfCsS9Kk58MgKLYY5nLXtwWsv5cmPhz0gUl9hrbW7BW2RG8YdkXpu51-i6qc9SGH-H9WfW8e5phqgAYTIejpqpnZti-b-o8uuOMtvr2bWH0U9p5iRso5XB5QFU0=w200-h246-s-no-gm?authuser=0')
        }
    }else if(fsex [1].checked){
        gênero = 'Mulher'
        if (idade>=0 && idade< 10){
            // Criança
            img.setAttribute('src','https://lh3.googleusercontent.com/pw/ABLVV87eY_IUKD76lqaPd08O41ju3GGazsjhfnpLpgGFEa5Qb4ZY77VBz-B52-RFhEnQJIJNAp7t2wHDwzzFsvyrQ-Lp4Aadsk9XOfk8PG8GtZwtWpfiey09ZChL0G9aTtyFmCah8GmMzwsXSh0-agkg4Iht42quFx6h59aWiG6W-L6uZjm0cNyYmdAd45P2hKGlNnUsV3sIIplHI-HQhDQasUUGSlYNHSMONmHI2t29yC7sFKaSgdQgWdeMSz3UWnhXq1bi4jDmBazr3IRtYHapWuqXZLeYujM-hHywV_G3Gb8PEUzIILyq1XeqvoYyQmFBdU6k2Kb10pXPqWG4ujL_EDAi7IRqB8gQI9oqkDYSOvFEbxkdQeBpkQAeROTZcBxZ_PPPs05Ds0R29pB4nYLTZjhCatvtplJFgoXtjP5v3Kit01Nj4IBU9mWCVmwnaAEXMbkiLreX9DujqxD4EztufX6JEWo6VK688qYbix1IUQ8fU8uyvUkKluWP1MxvQ61-GF_JqbzCZKQ7EDk7JjdUZlAAZ_KU-9JtVpqKk5jNM9p5kxcNpfO_EljzeLNhTAC3-Ps90piPOZJajuVtsEnPM_gxlvLHQIgosBHEJwc2YThcAaFcMMth4kqv6X2vit35dG8HVYFtxH2OW2rqacyPzEsh_eIgE-4u7uRxbXUC70zFm3EsyJQt1ziymvcNs4n9wT52WOfFPZ1lpCkGsI7QNSjYuJDBIfnDRmsjqYWYYkkRpQIpFRU1kexMIlX_Y2pHAYqB5-EL4Ac61MyKX-gRtEZlBIL0iJ4smeeWYz1vgKUgndj5ntVG-nQtuY-ricJLlliU1xYk5vp5AxsMjL0oVXpFNynf18ERvUK0DNUw-OKhZxM9EorPpaHuhwelpH-uUH00xfg=w200-h300-s-no-gm?authuser=0')
        }else if (idade<21){
            // Jovem
            img.setAttribute('src','https://lh3.googleusercontent.com/pw/ABLVV87V-Rdp53PkO8Ps5qPxIQQwPm-OBm0snXIi3uZzGFxeKWLjQ2wqRPIn6TV7vkQL8xRpdluD4usqEI36hzmCuQ5-aZFqDi98TmxV8NkE6cQj5P4MtiC5u3x5AQI8uEDz45k3TqgnXrwASeFyaDJThBnucT0EFBVIKZ4SZFEZuMjZUHSXnLqOD_ICEpBWp-AO2rbhUctjftmiQd57OWNB5HvUxVvebUWKa1Hyj5byutMx0BNH7HWeEuGEBQXcoVce-LOXoE500PnNa2Z_Rc0ef2xc2kyChqhPD9mrA09zb1cu-lmNMc6jKU1FVk2cqK4TkCFtz2C9OKJrtsk1GHWX4AIvh5Tn05nCCRs4V_HkEGpkuWBhT-YH5wCWiYmZITWDul-aePCoWwRyNuym2xAe8wAhsSgDy4MYjH1RgcJBNMeQD6B-pnI17b3pVIgXggW_iThSacMUOSI75Q_wF9Er0Ofyg2Ih8R6BS7on2xFz7nK2oRbiQjwOavoaMwnMl4QphcYcW7cZqB_jdx0VHOL5qivXFPLbew4O8SBpxvwUApmttjmAub2QZM7HdZvXy5C181KP4y0T-eenu1jRSSnZ2-T8l2OmWGutTn3eYkSjyx9JM0KAzsbSD0w-O314Y1WncV7rXLeOx4_PPQEeRJg2TgSAhJ5hvkyzXAfbY8n5rRDfXgmLeKuXPMstlMih61bxAl3chSnEn-8L44k-me_e3Ze9nCGaqJ3lI82VOjf7y2-r1v28yVN-2Y-_ILs4qzge_lGTtxOgAUxwz67SNYpxrGDKEKS_TgixoI5kBPxRUz5t7sEjtn9Z7-P_OT6GdbaS5LvTg3ArUZFfHyRv2PGBL7XudJHFyOBMuGIYqcMwvowz5zqznEPoNQDoftuRm18eYWtz8Yo=w200-h133-s-no-gm?authuser=0')
        }else if(idade<50){
            // Adulto
             img.setAttribute('src','https://lh3.googleusercontent.com/pw/ABLVV86P2YOIQ6oqhw1IQ1VKv1dKo7ZGBN7RlabiOmNDycJgYeUgPThdEph1LfbBAaCs_nXqMvh8OkpZvYKTJiBYxv2KV0HBks62UEeiwUNmiLsW2FBT371CTe9LctCFOSM7DkjYB7yr_XnUiYnXtg4pjpQdyQakgzQH6jwatMHh_Ghs7FMERyouZbcaKX19-2c4ZcTMZAGfetwVy07DwLfBRx-IXZOZ3rq-37V3cgGM85ISmtxtq6jW2FEDpkEEOzV4VsIHjMWr7-KW0psLjVQp3bFeR1YugeewWv3MbmbE2Vk9vlELmKVksDcvnndObKnAWV8z6ziK2lcjg43nydGLJKpQ3dpum8hMu-FNE0zpW8xy-UgNkXjV9tcqrT-OIaFG0-domHkxgtRvZ-BVq54bLpmqz5m0d-qspjauQqhWhPRyjl7QBJdZeGY5d5mfpjRbEc4Y6HL1kSbY4sgHaBhI-pIXa3xnLkpmmQoAShgYEvd5FK3fHT5K1LBc_qHgd3ff-bfv8AHGFBykmzm5QJ87aeSbXx6pSuOUuoO7rRKuJo5uoYztgEUiWZKjYCT3U8dYFwW6IixOmWY7pvq7Lv3Z7_QR-9MPac9_yGVyRL9eip3N4k5hS-BFpyAq9EEd3eRANq2azmZkxwizkjPOgVRpTi5bf9zU4DFPbfk7DzQan4F9C1-fPtvZzAQ-uTXGmwY6_4Mqy6KVeNfJ0DvPw4rfZjWzysfmUbEfb-eHlPMNHq94Kb1iUanuYeJOQ2vCZ5s582sDHtb6jhKvoUFtPUQSK8WySeeKXddspq-VYNv4TVLsdZO3cMAanx7ZkvDWWALj_pWKJV0F8dUUcDxH7pEu1Ezvuf17854YK9HUaevlY7raP1kqxDEKzaEuCuOoDUZSBj2L7MI=w250-h171-s-no-gm?authuser=0')
        }else{
            // Idoso
            img.setAttribute('src','https://lh3.googleusercontent.com/pw/ABLVV84DoM9F_kCSbt_t6rhFgYTQ6dSphcpGLe9PoC_7zsSgeWAZZcahWsir713y-nPc_tsGzUFV7Fhvj7t2VZ7_HRvKEEj_pE3iGY_gfl1JEXZyW-GyB8xENAAEZmxqHkJ3aXRsHzy2GWButSetfOk9vXYpRszklS_NDPIsPM52ehHGxUztiv2-mGbANp4mLtSqGZzRLFP_iqiUg7CT1GCIo0dgMwNADzWPJLMZtGmn9wzeESOFK_2TyBaR-C5tGVrxpEDfq5Ws5VdwqaphC5Favk0twxRitTlGYhmboNhad0np-w9HUaIC0G-n6e1r01qq9S5TX5BYjsQ8ySaIPw8TDfAKT1unAcwcSW-rAGPvMaQoBIE9oChnq10U6PtEW9AcMUKbm9BrRsD252a-_YegyGL6AjnBJCEb-RTdRyFd72uHveYW2K70PCmU5-WLNbq62eijx3kgq1OkPs4g77w6redrFh3S5RgOfkrlaeXk7pPo9LPRu5FPh5r9vDXm78O73msPNnkFfOFDE0AmD735HeYSjsrh3cgq3dwLH5b0Ze5V5doh7ADCYWCOVgcOl2xlP2bU3GXlfAQy6NARlF8wMIRZKbAWyF6xO1z5v5OIIzQWXnKjD79wVHxl1c8uHxbetveJP9pOxarEmIbq6q_5GH47SUHl_wFUjvZ0r9q44CQOt0Mubeplv_5hBWtrP2SUBv6fkfm7ogjf7zDKMHNJP2y2Jskqtgl1UClDtWDkhjv1jDOoxzPB1Iqisp31NUzwfo459wIHLrIu-Iz-Ah5KokrcFisLeRxRO9K2h3zKBeXIMAhaFgkaX1Rt_-HM0JKifUdQf_uNCPIWuGJzC0Do80Mi-ikjov6pv3OxmdU5yJVPHSsgNlkAn4cw44QWwibzBAUybDQ=w200-h301-s-no-gm?authuser=0')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML =`Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}  
}  
