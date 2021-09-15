// Address book (https://github.com/nimiq/nimiq-utils/blob/master/address-book/address-book.js)

var AddressBook = {
    getLabel: function(address) {
        return AddressBook.BOOK[address] || null;
    }
}

AddressBook.BOOK = {
    // Mainnet Pools
    'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8': 'Skypool',
    'NQ58 U4HN TVVA FCRS VLYL 8XTL K0B7 2FVD EC6B': 'Skypool Gundam',
    'NQ88 D1R3 KR4H KSY2 CQYR 5G0C 80X4 0KED 32G8': 'Skypool Bebop',
    'NQ43 GQ0B R7AJ 7SUG Q2HC 3XMP MNRU 8VM0 AJEG': 'Skypool Pandaman',
    'NQ74 FLQL DRE3 99PF CET0 3N7D JKLF MQP6 87KS': 'Skypool SamuraiChamploo',
    'NQ46 UTKP D8A9 04RS A1LL GPR8 BE4L G2BD FYSX': 'Skypool Hehe',
    'NQ32 473Y R5T3 979R 325K S8UT 7E3A NRNS VBX2': 'SushiPool',
    'NQ89 T8SS SE0B SS5L GRH0 J849 LQ0L 3J6N RAFU': 'SushiPool',
    'NQ76 R7R0 DCKG N0RC 35XK ULTS N41J VGA7 3CMP': 'Porky Pool',
    'NQ10 76JC KSSE 5S2R U401 NC5P M3N2 8TKQ YATP': 'Nimiqchain.info Pool',
    'NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1': 'Beeppool',
    'NQ90 P00L 2EG5 3SBU 7TB5 NPGG 8FNL 4JC7 A4ML': 'NIMIQ.WATCH Pool',
    'NQ11 P00L 2HYP TUK8 VY6L 2N22 MMBU MHHR BSAA': 'Nimpool.io',
    'NQ04 3GHQ RAV6 75FD R9XA VS7N 146Q H230 2KER': 'Nimiqpool.com',
    'NQ07 SURF KVMX XF1U T3PH GXSN HYK1 RG71 HBKR': 'Nimiq.Surf',
    'NQ90 PH1L 7MT2 VTUH PJYC 17RV Q61B 006N 4KP7': 'PhilPool',
    'NQ06 NG1G 83YG 5D59 LK8G Y2JB VYTH EL6D 7AKY': 'Nimbus Pool',
    'NQ18 37VM K2Y5 2HPY 5U80 2E0U VHUJ R7RK QSNE': 'Sirius Pool',
    'NQ64 55BR 87SX AFHN XB27 M7BQ F7CY L4FV 2TG2': 'HexaPool',
    'NQ67 AQB4 RHCC AU2T 4CC0 ETUT X1XB SSFL V9UQ': 'mineNIM Pool',
    'NQ37 47US CL1J M0KQ KEY3 YQ4G KGHC VPVF 8L02': 'Nimiqpocket Pool',
    'NQ24 900S EKCD HGDA TN30 8UET LX2F 75U1 G1A1': 'Nimiqo.com',
    'NQ88 QEC9 5MDH T2SB V70A GB76 MGRT STSB LN9A': 'X Pool',
    'NQ04 XEHA A84N FXQ4 DPPE 82PG QS63 TH1X XCHQ': 'icemining.ca',
    'NQ43 FGFD 5GFC LVR2 VBEG FVRH RGEQ MY66 1EXE': 'Cuckoo Pool',
    'NQ39 4QEH 96PD CRRH GVJ8 DJX5 A4FU 30KU M38G': 'Euro Nimiq Pool',
    'NQ46 A8DL P003 VJH4 N2FS VQM6 5VB3 38VA DNCS': 'URP_Mining',
    'NQ98 GG96 VCBY 2P1N UYK6 BU71 1UU7 SMUP KT8X': 'zeliboooba.ga',
    'NQ98 NKJM 9EVQ PXE5 B7PV GHK1 V5K2 P5HK R6JY': 'syss.ml',
    'NQ53 FREE P00L K329 X0GV 8K8C 34HB Y1Q9 48B7': 'FuguPool',
    'NQ59 H4E7 VHKX EEJG FLT2 A41A 4A6P PGCN 87N9': 'BalkanMiningPool',
    'NQ33 F625 YNJ8 KUKM P5PH XHSH A68H 8NBE 8TV4': 'BlankPool',
    'NQ73 5YST L539 X4PR 079G KXS4 5LM8 X0EG 49AR': 'HashExpress Pool',
    'NQ46 CFSH QGJG BEBT JFTC TTNR C7SV 59JP 69HJ': 'Micro Pool',
    'NQ64 3GHE KLVF G5KT EM66 8CTX M7U3 3P6G CVXS': 'Consensus Protocol Pool', // @Saaasss
    'NQ72 MG1Y E8F2 EBH9 3NVH 1HBY ATRE 26TS MH19': 'AceMining Pool',
    'NQ97 QG2U YL9L 4NVG H18B 24B6 CYM3 75VJ FT73': 'HashExpress',
    'NQ52 5XQ7 P24G B8E6 J8RM PP26 5XXR GT6Y ALEK': 'Urkel Pool',
    'NQ76 ERYJ B75G 8QJ1 YFN3 VRKV RTYJ NTY4 NLH9': 'das3990x',
    'NQ33 P6CJ 15C8 RC8F KFXK LPCU C36A RNVB GHYT': 'LoloPool',
    'NQ27 CH2H Q8NK M9BL QYF5 K5X6 KFR8 76TL DHUX': 'das3990x',
    'NQ13 J666 L991 VVJ4 X3D2 77LL Y9Y9 A615 0YVG': 'das3990x',
    'NQ87 RP5U 72J8 5N5K JUDE HGVU VYHX QM37 23V4': 'Minet',
    // '': '',
    // '': '',

    // Mainnet Services
    'NQ15 MLJN 23YB 8FBM 61TN 7LYG 2212 LVBG 4V19': 'NIM Activation',
    'NQ09 VF5Y 1PKV MRM4 5LE1 55KV P6R2 GXYJ XYQF': 'Nimiq Foundation',
    'NQ19 YG54 46TX EHGQ D2R2 V8XA JX84 UFG0 S0MC': 'Nimiq Charity',
    'NQ93 RL4N M68G 9DEN CKU9 HJRE HYRJ CYRE J0XB': 'nimiqfaucet.io',
    'NQ94 GSXP KNG0 K5YV HFJ1 PYAQ Y5D1 XTQ1 SLFP': 'Nimiq-Faucet.surge.sh',
    'NQ80 PAYN R93R D0H4 BH8T KPRT SBYE 30A3 PHDL': 'PayNim.app',
    'NQ85 TEST VY0L DR6U KDXA 6EAV 1EJG ENJ9 NCGP': 'Discord NIM Tip Bot',
    'NQ26 NMK7 R4EA KSV2 67Q2 5L4T DVDS FR5E NX7B': 'Nimiq Shop',
    'NQ24 458E 67E1 C90M C0XQ 146B CE6R JMYR E27S': 'Nimiq Shop',
    'NQ02 YP68 BA76 0KR3 QY9C SF0K LP8Q THB6 LTKU': 'Nimiq Faucet',
    'NQ23 3RK3 U8KF 72NS SPNX H0R3 E9HQ 68AB SHAQ': 'Nimbet.cc',
    'NQ07 R0NG UTD5 P187 6YLK CD3H EMGF EDAC LFUS': 'GetNIM (discontinued)', // App no longer available
    'NQ81 J9XR VM0N T9Q7 EC44 B910 QSKU 0G3Y S80Q': 'GetNim.io',
    'NQ91 B9E4 1FTS PV33 9NTJ H1PE NYDE 0M36 CMLT': 'Nimiq TrustWallet Faucet',
    'NQ57 66QM QFT0 QQX8 1QSL 820V XDN1 1C82 1M2B': 'Bidali Giftcards',
    'NQ69 R83V YQXR L0LF YPEY 11KH SKX9 T7BY CBVH': 'Nimtris',
    'NQ41 V0TE UCSX NF24 BGKQ 8B7R RNVE FRMH NUJH': 'Curve Change Vote (May 2020)',
    'NQ84 V0TE 5EH3 UT5S 67UV SQL0 AUS8 NEKS 2K7B': 'Curve Ranking Vote (June 2020)',
    'NQ53 SQNM 36RL F333 PPBJ KKRC RE33 2X06 1HJA': 'Fastspot Demo',
    'NQ36 71PB 0TXY AUA9 JG2Y 2JQG PQBF YSVK KNTA': 'NIM TIP BOT',
    'NQ97 QTDN Q3P7 71A5 56YN NKRN 5S1B 6QNJ 0FBE': 'Noviopay-DEMO',
    'NQ70 55N0 8G9K L0V8 XVUB 5L3H H8RK 0TBR MQF6': 'Tips.me',
    'NQ24 M0PS USES AJF6 9GQX 7C64 3E3F DYGF 6QP5': 'Mopsus Block Explorer',
    'NQ55 VDTM 6PVT N672 SECN JKVD 9KE4 SD91 PCCM': 'Nim.sh',
    'NQ60 JEN9 1QFN 5C00 NPHR 9AL0 TT09 4VFL 7X0E': 'Nimiq Lottery', // ?
    'NQ20 8P9L 3YMD GQYT 1TAA 8D0G MC12 5HBQ 1Q8A': 'Nimiq Sunset Cyberspace',
    'NQ31 FVDG LE5U 9RC9 77KQ EAN5 YP9V G999 X535': 'Dinarpay.net',
    'NQ35 YGH5 41TT R77B 61S6 UP7L XC0M S0D2 GDFL': 'tip.cc',
    'NQ56 VE9K PV0Y TK4T QBMY 8E9G B85J QR6M MSHL': 'Fastspot GO',
    'NQ04 PMCY 8ETQ TN8M 42NF M497 LCPM F215 T6CU': 'Nimiq Vouchers',
    'NQ23 6CYY 7AJG AM08 Y5G5 MHGX 6U4U 270A 7SH0': 'OASIS Fee Buy-Back',
    'NQ38 KCJ8 X2JK LEEH 4HYL 7D61 3T3P RCNG GJ2C': 'NimiqX',
    'NQ69 GTPG 0RCT GR2S E90G 60EV X65X H2KH BQLL': 'NimClick',
    'NQ45 B9ST N7CS 2GKJ T9NM 615G H1RG 25UE AD3D': 'nim.drawpad.org/n/',
    'NQ69 SUJP 7U2H 07UP QS79 NJ12 GTXS 62MG T04H': 'NimiqFaucet.Tk',
    // '': '',

    // Mainet users
    'NQ65 GS91 H8CS QFAN 1EVS UK3G X7PL L9N1 X4KC': '@Albermonte', // Added with his permission
    'NQ89 5RVU 5AFP HA4J HN5R L1J4 STY8 XXCL BXN5': '@TSDY',
    'NQ47 1DLE 5VC2 UPTU 401B P0XJ C8YK SARL A02A': '@kyo',
    'NQ51 8LBD A6RJ DTL8 JTJX S8V3 4HGS UHPC BL95': '@Tuatara',
    'NQ85 QBSB NU70 ES3X 2EAB QFEG AFV3 RL49 RRVE': '@Hellish', // @Midaswell
    'NQ69 A833 829B ED1D B1D5 CDKM 3ATB VV63 8LCC': '@pombero',
    'NQ85 39DC G5MC V3P3 77TX R07M G3PR V8BT HCRB': '@BIGNIMIQ',
    'NQ73 13YA V1SH VGS6 U5CR E10E N7L4 Q6GJ PMMU': '@MEZONTROP',
    'NQ68 MA2F 70NT TLBN RXNT 8U5Y 1CQF 5X04 6JVL': '@Nese_Tips',
    'NQ14 1YAV DLNM PG6P MN5U DCD5 VHX8 F7LT EPFH': '@xvx',
    'NQ53 91J4 KLFA TLPM E7YX KJ5T 6KSR LS72 GJ62': '@WillieStylezPop',
    'NQ33 FB14 XG41 K5NH MKPT GMAQ M1BM 01K2 523N': '@vcote',
    'NQ50 5QSJ 3JQG 9PJK B591 1LEK MS4S SRG9 NYGF': '@gyg',
    'NQ56 X3D3 Q298 YGPN 1F3B 0N84 XSXU TGQ4 J5US': '@beavNimiq',
    'NQ45 PV0B PPJN 0HTE LE8U Y8G8 PKK2 CBLG 0PN3': '@beavNimiq',
    'NQ77 RAF6 GY2E EQ75 STEL LX4U AVXE YQ9K HB9C': '@kwb123', // @beavNimiq
    'NQ47 V0LY MA1Q 4FHH T3UT NJ00 EXMT 8B32 5DP6': '@Fatima',
    'NQ62 60RF KKKJ 7XCX 9BXH U8PD 6YE3 K9F2 9QSF': '@Mad Martian',
    'NQ52 7TL5 RA6B SSAS FULC P3SR D88B X2CK 0VTX': '@Tuấn_Ngô',
    'NQ15 Y2JU BHX8 UGUT 378A GNMV GEMT MQ7F G8K7': '@Tuấn_Ngô',
    'NQ15 0803 R8R8 H4EH LEVG 3SUT JC58 TRUX 1033': '@Flu_bat',
    'NQ39 KGYY J9AD KHCV YD9H B9VY ERX6 BS3L 66XJ': '@MaltaPower', // @Nunu
    'NQ72 LQQU RUE1 21EG M95N 7T95 BAQV B3X0 A9E6': '@11strokes',
    'NQ56 JVMC 03YP S4DY NU9C 4VER JER8 EJY1 JX9U': '@Rhino',
    'NQ61 VYMA UYGN T9AM HF6L 1R8B HTN6 4SVJ 8EUU': '@sahagun',
    'NQ59 J97D TG80 4EY3 BDQB MBJR TQ9P 67DV H3G5': '@NIM Reaper',
    'NQ05 2E2E 1D9A CTG6 XKCT QCNM 4YQX FX6E 6DAX': '@chintu5550',
    'NQ81 4C0S 0BEJ CA7E DS5D BKTL YC64 N3T3 555M': '@bumblebee',
    'NQ11 HGCJ 10XR 7KHU 0DEL SC4N A0FM NEN5 KYRQ': '@luixxo',
    'NQ08 6KPS VVFD G72A 38K2 9NVS KBTF R14Q HLKX': '@takizan',
    'NQ92 2UFR Q2VA 5U0R V8BU AQYS 2CVA DJS6 CV60': '@Sicario',
    'NQ83 VTT1 EVDL 1YX5 2KNM FG9J AX9V 50KJ NM5X': '@walllz12345',
    'NQ04 H6XH 3E1D 1K8G QGB9 P5R5 HRFP 78HK F5H8': '@ORTİS',
    'NQ51 SNER 35JM 4YFL U462 PLY9 D1FF 6SM9 A1PB': '@ORTİŞ',
    'NQ81 VV76 QAEV NJMQ N9GX L4F2 0H1L 0FYP HQ1H': '@Malcriado',
    'NQ33 T8RQ 0H4C KSYP 8NNY XXVV GPGE ACS6 H6AG': '@Cryptosurf',
    'NQ24 DFN4 64GR BJD3 V48L C5PG KPDK GYMS 33AG': '@ShyMun',
    'NQ38 NY45 RDMX RS0M 9GTH A3FT A007 KG18 AK9N': '@Hektorpalme0815',
    'NQ28 J1FA AFFP U4FC C3TQ 63YJ SB2C 3AM5 ET8R': '@Yukkitatsu',
    'NQ23 GRCE B4FY 1536 7J7V 7RD0 LDY1 F5RV PQH1': '@JuicyJavo',
    'NQ38 959K GUKK VN84 693H PP3E FMQU 3A3S 61XP': '@My_Lost',
    'NQ60 218U 6YBR CNNT 8FNB VUGD 3CM6 JJR4 AM6C': '@Jassen_Art',
    'NQ20 NABX N87H VB9F ED48 UF69 3FU1 V1NN J9VL': '@Jassen_QR4World',
    'NQ36 V88A BHRL NH3H 26AP SQLL HX0S YG95 85M0': '@CryptoMilitaryVet',
    'NQ40 S140 NH9H BNG3 049K 1V2D GRPV G0VE C60Q': '@MacabreGoriumLabs',
    'NQ67 JB1D NDHV UYXG RRP2 VS1D PPNU GXVD GULP': '@Jenny',
    'NQ06 J05C LA27 21BQ 5N48 5XRY 8FM0 BBF9 QR7F': '@Nimiq_Indonesia',
    'NQ44 YB53 LJSG HM86 A0R0 MDKM VY9A G1MX Y1JM': '@Sam',
    'NQ61 YU5S NRM5 GYQD P9AT 35ND YSDR 3H83 URBK': '@Dan',
    'NQ06 XRX9 VHQ9 2JX3 EC2G F7U2 975R 54XV EDF7': '@HerskaMagic',
    'NQ90 1F04 KVSY 1KLT LTMF RUAR SB4Q CDQY 8RQ9': '@Sander',
    'NQ10 UYJV X55P FMN7 K2L9 RRMV B5VE 8K77 DPM2': '@Popcode',
    'NQ02 VKAQ LNQU C66X 3QPL ACCT G7S6 MXXQ N7HL': '@John',
    'NQ34 L9MP HRS7 5P8T MMQ9 61F7 CMP3 SBTN R7NA': '@TraTow',
    'NQ57 9V46 VKDU M1E9 PMD9 7MEN QY16 JYG9 C6UJ': '@banjroto',
    'NQ28 4DCY MLT6 A03J BQ4N VXA1 G8E4 DVFF H7YY': '@ShuviT',
    'NQ11 1D4E 30A5 L8H2 VYUC FLMA EVXB 7XD7 XSEF': '@Fixi0n',
    'NQ71 UVFP 9490 KFEG DB8N XY29 0UMG 22JM 2CTQ': '@Ayarbozan',
    'NQ41 ELHH PHCA V9X9 UR9B N702 FA5V UFQ6 ALXH': '@Dan',
    'NQ70 YV1R PVLT 8UF3 8GVJ B8TA GERV PN84 2K3B': '@Dan',
    'NQ97 UPUH J6XG G3CV 4UEP V6RJ GHCX 4FT5 6AUX': '@Doge',
    'NQ81 J1UT LSY0 C4DH EV70 DS8S 3TEF 1AML 63BP': '@DankLyon',
    'NQ50 BYEV S9MC L2VE 3NLL USFU 4GF5 0Q0S ETFC': '@Mikkel',
    'NQ66 EC5T EN1L L397 TFH3 2MR3 SQU4 UPGJ NQBT': '@Trubaduri',
    'NQ08 A9G6 MAVY SRUU CJBN P911 7MSX 5AVP 09QS': '@JoiP',
    'NQ41 J41M M8EJ MF0G BPFQ 78P8 5M79 XA5B ECQV': '@Gretig', // @Sugi
    'NQ08 Y51M FGM7 GXF3 LHT4 UY6N D624 JPEM 2ACS': '@DUMPER',
    'NQ57 0HV8 XXQ0 JRM6 8SP6 AR7G 562B BDAY U0V0': '@Fatima',
    'NQ19 H0LN F5KK D3B1 QYTY K4UA R3N4 EPPL 591U': '@Base1',
    'NQ95 5UHB 1C25 H4DM 51U6 975V UCQ0 PKF4 HYGY': '@NobadyLocalHost',
    'NQ74 75RX AJBX 5SNV 3AHA 2QB3 RK7Y 42F8 UPMU': '@Drummer1984',
    'NQ96 M0GT QPV4 CFVV YH1P FB2S A9N3 57P1 JT8N': '@Drummer1984',
    'NQ09 96NS Y84Y E5XN 3AGH GTRC FVQ1 4GUP TEF8': '@cryptomaniac',
    'NQ24 DRST 294X 0MFU 5HB8 XJ0K 84S3 SJAQ F6P0': '@Janzu',
    'NQ78 DGTU FHPP XD8U 8CJB M688 S9YT T4SR FX4L': '@Baha',
    'NQ90 JL8J SGNG DAPH CXEY PPX8 89TB RBP0 CNX4': '@Ks',
    'NQ45 29G2 X1FS DMJA TQG7 43HJ 3DGB LBXC B18P': '@CF-01010',
    'NQ04 7413 B0BM N1NJ VFBG QR5L R1DB JKNP EEUV': '@Nephys',
    'NQ85 JME9 KJ8B FT0F 4HRM KRTM A7QV 2YEA TUT8': '@Aqwaqwaqw200',
    'NQ12 09N1 DU8M YSU8 H2UM 388B 3L90 HSQY T7FD': '@Hakyv6',
    'NQ55 Q8DX VR2X 2HSC GEH8 NY46 RULG Q9KU KEBC': '@Nimiqzuela',
    'NQ18 81XK J630 2H1N AAAN XDHR RG8T 2VTD LYE4': '@EvilBee',
    'NQ47 DYFV LEDK 4XT0 BFUD T1HP 93M7 DSA7 1XKM': '@Myk',
    'NQ80 LN4U MRY2 JLKR 8C4Y JYV6 MAQX 2KAH 48GP': '@Minnow',
    'NQ38 NNP9 19CF T3H3 1EVN 0RY6 7VMT NNRQ 2MN5': '@Minnow',
    'NQ10 JVM6 H6QR ESRM 0NTY C4N7 2K6B FV0N MGY6': '@Junkie',
    'NQ23 D4YX GY0U DJUS 1QUE A51B Q3A3 76EF JGH4': '@ivy',
    'NQ35 2JNP T839 P25U YSS4 9F1N SV0K 3XAH 1R3Q': '@PetrEff',
    'NQ98 BNH7 FX4S D2TL ARPT GYE4 M5QY PXKF PXYV': '@Kiril',
    'NQ06 M9TR 24HF TB8Q 0VT5 1UY1 QCCE 199M K5KG': '@ALATAY',
    'NQ84 KMKT 7F4A EN17 HPB6 40TX 6DLX R4MX HM0N': '@Klingt',
    'NQ29 GE8F 6NTM 1AE3 7E52 S9XQ 8NFT QQ5K VEUX': '@królowa_nimiqow',
    'NQ30 RBAM 6YL2 D5XU HPV1 8JFS 8880 NUF1 P61F': '@Rumble',
    'NQ45 YDQ8 YVCV 4MQ7 LK4D SS6C 973Q XMTJ V8BH': '@Elite-NetworkPH',
    'NQ69 75SJ CNCM KGAF 4SCK 2ED8 1E6A ABBU 1S8K': '@big_foot',
    'NQ88 BXEB G7PV 7EFS 30H4 04T4 S179 TFCK J9RL': '@CSY',
    'NQ37 K4AE 3PB2 YL35 VN0H 1SG4 FG8P YK90 JCU0': '@francis_company',
    'NQ94 LAR6 Y2U4 4Q49 JMBG H08A 4KA1 F993 UPY3': '@DAng',
    'NQ31 GCAE LY95 YHSP GQU9 05L0 GLFA B83D FMME': '@Mithun',
    'NQ97 RXFQ BXYP 0UC7 YKE0 G2A8 NEQ1 QVMR 35QH': '@Diver',
    'NQ77 ANVG P6T3 A87V LJGF A14F 4JSF A5GM KDLV': '@Nimiqal',
    'NQ84 987M NFYL 97QS RMMQ JGA1 LLEY 91D2 66NV': '@farshid',
    'NQ63 1UVL 7HU4 UXB1 8Q9S LABC SVT1 N79J 29CN': '@Cace',
    'NQ05 GX7V J50Q UBU9 9XJY VBY4 V9E6 3SJ5 FSKL': '@Taurean_Ballad',
    'NQ78 N2N2 32YT UMXB A0KJ LD05 GM3T 2G0P X8UP': '@Pavel',
    'NQ03 MSTT 6EKT LGQ5 7KD2 78NF 12DL SG18 73CV': '@ConRTist',
    'NQ20 2RDM R8PY 7NC0 CQ9A NVF8 72PR G6JM ADFM': '@max574',
    'NQ61 U8AY 5PY2 L556 K7D1 NYPP YN7V CTHY 234L': '@GreedyNimiq',
    'NQ90 H4PC GJ77 YJTL HSPE 48YM ARP5 F70F 1RSS': '@OlZen',
    'NQ28 YYRN 64FP SD7N E3D4 N6FP SDMJ ET8P 60X2': '@SQRL',
    'NQ56 CQC7 F62G 19F2 02X8 77YB PSLU G4TK MAB4': '@foad_khezri',
    'NQ88 FJYR P3NX 87A3 LSHJ DM18 MG82 HKJN RB1E': '@cxx',
    'NQ61 A1PT PHFU 7FV9 X3PL GUXC E0HD SL4A 05X8': '@Gtsmn',
    'NQ67 NJ74 E6D6 C2EV SD0B QXB3 245F CKM3 8ALE': '@Bu2020',
    'NQ88 5T0T 62E4 SA87 BQM3 91XP 151U 3211 3085': '@luketherock',
    'NQ84 1AAM MG87 4HLX KRP4 EUR3 DAHR MD4G 9J72': '@HB',
    'NQ27 3HGH 840H T8CC H71Q Y74U K1QX AL52 8LPX': '@vvv',
    'NQ50 J7RS YHRL TPDK F27U TBXT Q2RU 4LEY QNP9': '@Pulsy',
    'NQ21 VVHY 9RFY 8XBB 755B HCDC X3BX SMD3 MJ8H': '@Kala',
    'NQ35 1PYP YLK1 J9JB EKRK H1LA 9TPG PLBC VLAG': '@Bulldog',
    'NQ32 GMK5 866D 1V79 M5U4 CR2Q FPNF F37L 4A60': '@Hrvoje',
    'NQ66 BY8N 8EFC 3C0E SXAF 4QDT X1K0 TLPX AN52': '@pinky',
    'NQ30 BC43 MCTC 6EFF 79KF XH17 267E EYVP 1T96': '@Appithkia',
    'NQ22 PLKN 3T3S 7JX0 D69S HK4K EARC 0BJU 203F': '@Nano_Nimiq',
    'NQ76 7F37 SXFG KGD6 2VQ6 MVXT 117J 838M JMGQ': '@CF-01055',
    'NQ67 7B6D BC8R F6M4 MJSE XQF7 EKR6 FPLY C0L4': '@Yoda',
    'NQ54 QTEN YNG7 FHXR A0N4 LDCV RR13 S4PX QA5A': '@OTPYRC_EVOLUTION',
    'NQ33 DSRY 9J7E 9TFX 0CKM 98VN 3S82 QYMX PA82': '@Coldy',
    'NQ06 AGCX K8AD 81C4 AYG0 EC0U 6ML7 38KR 3NH3': '@cryptonewbie',
    'NQ37 J27C P719 F42Y P43S YE2U 7SK6 MJCK 73VN': '@Shit_lord_chatulu',
    'NQ47 V2Y5 YFQN M4N6 2LKE 1N2D TP8T 46GA D452': '@Manny27nyc',
    'NQ10 SELC 58RE YHKF 4YY6 TJA8 D4SK CYQB ACSL': '@Manny27nyc',
    'NQ92 D1TK 088T GL1N 0UAK L4UY 5E1Q G8MK B2X8': '@Manny27nyc',
    'NQ21 CMMM NCES NF3T 9163 BHKV 448C D75J 29FH': '@laegoiste',
    'NQ71 CAD6 QXNS 193P CRHU 1UD8 71TK QS3L HSAP': '@Dolla',
    'NQ38 ERR9 RDR4 035E 90FY KV0P 4QMJ DSGS MYNU': '@jura',
    'NQ28 9ARR YXD7 VQQR 8GF1 55DD 4XFC TML2 PHTL': '@CF-01020',
    'NQ44 R629 SC2L 16VM S4VM T1MY FFQF D8VN U5DE': '@CF-01045',
    'NQ02 8QN1 GEML 6AD4 8NMC 6QDT 97C9 0C6Q EPJG': '@Memeslatino.net', // marcoswma
    'NQ90 AMB7 C0KP L9BG YD41 Q929 9QN3 6NAH QFBR': '@Nippy',
    'NQ96 5DVP 9QG3 J7HY DLKK JRTJ LTJG HTC7 3MGE': '@psr',
    'NQ12 2SG8 YXER Y4PD US1R YRC3 21B4 A45F 3C2F': '@VDKS_MSK',
    'NQ92 B4RV 3ETA 8AF3 M9QP 3263 4Q5E Q1EX 7HEY': '@Thekinglife',
    'NQ22 906N R2M5 QKH8 7JDQ GS30 U4YN CQ8G R0H5': '@xor',
    'NQ93 CFXC 9EUG CUK2 GLPV CPL3 REBG BT84 ACQK': '@xor2',
    'NQ05 B831 RGBF XCA6 EJ7A 5XKY 2QEC 2HCU G3G8': '@xor3',
    'NQ11 5EGM NDLV P9PT 3RFC EM8C RS1L MKE6 3EEU': '@xor4',
    'NQ90 XQJJ 537S 9N51 F9C2 AAM9 7YRC D3GA B9JC': '@xor5',
    'NQ29 8KA7 L1A4 61MR TQ43 5CMX 4PNQ 5GQ9 SFGB': '@xor6',
    'NQ61 LL8S XTH9 JRUG F4SD JFJ9 MBG0 TTP1 58TA': '@xor7',
    'NQ63 QXG0 L2JP V23U CF64 8KH4 49CD VHUR 5CYN': '@xor8',
    'NQ05 HG90 72FD MY2N 4H1J CTT6 3E3X 11LE 4MTP': '@llight',
    'NQ35 P558 32S8 54XC 9L9Q H3QM D31R EUXC BFXB': '@dstark',
    'NQ79 4HMD M8VC HMTL A451 L7H2 XHVM DRQL 35MP': '@lookas',
    'NQ31 DPF7 PG3V C3J2 70A9 M2VS 4EV5 7CBA KD9D': '@kenowlee',
    'NQ18 2EJ6 BRCJ 14KS A723 V3H2 NKV4 S3Y0 CT1P': '@nimiq-rusty',
    'NQ63 PV14 U4P4 2P2A CCXY 5N4G 714V EL5G 5E7Y': '@V.L.',
    'NQ65 GFBH 6V8C TQ8D VEC3 LKNS TK1E 179J ANQ7': '@nimiq-france.fr',
    'NQ09 V97V QSL2 2CRF PQML 7R8D EMN1 5RQE QJ3V': '@xtopoffthelinex',
    'NQ09 715Y QNGB C4NF 77K9 P9SP UCUQ 8L59 RGHE': '@SMSK',
    'NQ45 9Q88 DY6S Y065 V78U P7XN GJSC L5E6 YG06': '@Hoot_hoot',
    'NQ06 Y3UL 2HH0 TH94 7DXT B04A 9AAB 8DVU 0BG3': '@meilcandra1975',
    'NQ72 92HA JELE 53LJ 866V 1C5U EUDE 3HE8 26GF': '@ALS_MINER',
    'NQ45 9Q88 DY6S Y065 V78U P7XN GJSC L5E6 YG06': '@Cool_kid',
    'NQ59 TUPH JERN 8YP1 232V 0R79 FQ0C V5HD 6VEK': '@didjingart',
    'NQ32 M2NG 14A4 Y8EK 5LQX BQ6P 1BP6 TUL5 3MRP': '@Sahebkarami',
    'NQ52 QY7Q M7Y4 LJNJ 15JC U9VG 8RMX 8EEQ 73EP': '@Stockton',
    'NQ97 VCAN CGT0 CB13 H33J L3G7 1D7K 0QA1 YPY7': '@tro',
    'NQ29 11D5 6217 FJ7D 1HYJ H5LB HE08 V6GR VS45': '@sibiu',
    'NQ43 A48M SKN7 0TFL UJD8 RQKS K0LR 40LQ X8GE': '@Turkey',
    'NQ29 AU3A X4EP PYTX YMDU LXYA 7RBP PJHD CTJV': '@LunarCRUSH',
    'NQ62 AX2Y BM0A RQD6 PYRU MMKP 51DJ L51H QKPB': '@Victoria',
    'NQ29 EJN3 CE7J 59F2 0KQ9 3BTX Q10G 9JUR NQLF': '@Pitta',
    'NQ38 L05U V7SS CL0M S492 UN1Y 8F8C NYJR F5LJ': '@ivantnnov',
    'NQ26 N4TP 1BVV 0CVX BF0P KFM6 XTDN A0QJ 6893': '@A_team',
    'NQ58 DX81 XP4B K29F FBC4 SMJ9 FLB1 XTJ0 3133': '@Romain32',
    'NQ41 AT6V KH24 FB4P 4PA8 RV56 707F 534D EUUE': '@Coinyspace',
    'NQ39 TS36 SYUJ TDAE FRAJ 3X8K KY63 PC37 CXM2': '@Lootera',
    'NQ44 8JMT C5SL BJ1A N0GJ 6D3C GS1H 1RC7 RBLM': '@DaShuaiGe',
    'NQ04 87UN J449 L4RL KC73 8PPB HKAP UPGF 2M14': '@Generous_Whale',
    'NQ98 6PAB ULKH DHMS 7B5B JEA2 TSRR GAHM UTVY': '@TaJazz',
    'NQ16 5R8K 4B2B 4M5V 1PU0 D804 KPYT CP87 G5MR': '@Letsgo',
    'NQ94 373Q 85QT V96H 7031 A41V E0FB F0Q6 P8LU': '@Lopetego',
    'NQ47 XBYV TCXC K4GN YQY4 S51L X0L0 LFBG SM4Y': '@New_Wolf_Republic',
    'NQ40 M0SJ 2YJ0 E4DA VLNY C0FB F810 L20Q 2PDF': '@Ihzan',
    'NQ60 YAAR ECT5 APUL V7BK Q76B A7T9 Y37B T0YM': '@Laura_&_Hayato',
    'NQ60 HRXU Y3CL 87UR GM7N 5DK1 2YQJ BUAN Q6EU': '@ePayMine',
    'NQ42 SGVA VEEG JYAJ NY0U LN71 DXPH 8C39 S2X9': '@Kopacenko',
    'NQ02 SLY7 UFXH 7EAU U3LY G3D4 94L7 FHBN 5J52': '@Taiko_King',
    'NQ92 589S 4CN6 U0FX NQRV NHQP TQNV CF1U BVHU': '@Smitop',
    'NQ96 AP2B GJCK 28BH YVTB 7DCD PFLN RPMK 3GU1': '@WarHead',
    'NQ22 2GY2 XM4H GRJE XU5C M010 TS76 9UD5 6RT6': '@Rock\'nRoll',
    'NQ82 C8TJ 4A98 2N33 KRAS MQEE BRRR H1G8 2TB6': '@Base',
    'NQ32 F1PA N4TY U5U6 NFJ5 MRCH G2CM KMQL NMXP': '@Enveloppe',
    'NQ54 HH8E J8UY SRAJ 3X2T M360 LUVB T22J ADAM': '@BamBam',
    'NQ52 KUQK FV68 VKRQ 7CJD X30J 8DF7 9C3A 11FM': '@Aguero',
    'NQ13 FQSE Q50A DNMB 4ABT JE0V 04YR 4BEM 8BM9': '@Jona',
    'NQ81 DBMP 8VBT K85E RG91 LUAQ VR7Q 5Y92 EKXR': '@Handcrypto',
    'NQ33 0RCN AGTB KL6C QVNN JDCQ L7KJ 95U2 PXKA': '@Ming Ming',
    'NQ34 Y7CL X6N1 VPRY TBPF GBMU ANT5 D3KS G120': '@Kin',
    'NQ36 GF5L 9SYL PKQ1 DTTH 608Q 9AC3 0NVL HH8H': '@Maxime',
    'NQ08 JYY6 7V0F EL7J CYNX RH78 TGD1 HP64 CSKG': '@Thomas',
    'NQ73 YP0M S7M4 VV5M T6EA 5XL4 QS7E 5CUK QEU8': '@toto',
    'NQ35 XJDQ 3SGT PMPT 6UL9 UYH1 FX77 EY4V EHY1': '@PINTU',
    'NQ34 53HU VEB2 E0LV DNF1 EYR0 1FR9 CNTP 6S7N': '@Jae',
    'NQ98 VDFB 2223 590J UPT7 KRTA CRQL MU5R 0FS9': '@sieucapcutee',
    'NQ52 88HS XP4Q 6SL9 12LQ UCHE QMMN 5ECV YC1F': '@Sunit',
    'NQ46 GQHT VK1N K1E4 8A5G 8RH1 XTFP 6DUK 7BGH': '@Arfasobiz111',
    'NQ95 YULU VV0E VMXL 6MLU 5YQA DV67 X464 DYLP': '@Arfanimiq',
    'NQ46 BF8X SCMH YH1Y A0JE 3SPV F47M 67H4 ERE5': '@Arfanimiq',
    'NQ85 42MY L9FX AUV0 H9TX 0ECU TFEA 26B0 A6S3': '@Arfanimiq',
    'NQ51 Q0AG EV0X 6259 9MSD L3FF PVFG 284A 78VU': '@Arfanimiq',
    'NQ29 JUBB U5LR HHB8 6DHQ PG6L B6YP Y7EJ HVMS': '@mathix',
    'NQ07 SK76 SLHN GNYE PYE3 U1B7 UVAB 1YNE YT34': '@xeon1',
    'NQ24 EK8M 2GGM 7ATE 50KN 2C8J 702G BVNM ST0R': '@wyp',
    'NQ77 J098 RNKN 8TGT C9QG 1BTX 4FCF 1GPR F032': '@TANWANI',
    'NQ14 PQ97 P5CX 7BQ6 HAU2 MC21 9YTC 3YU1 NNDC': '@Hoblock_Capital',
    'NQ84 HRYY 2SNA E2SM J94H 9YJA 9XX4 R3PC CHEM': '@Hot_Monet',
    'NQ29 KSPU 8PGL HA13 BCRL FB7V LXAD 0YSF TE2X': '@NimiqChina',
    'NQ55 G31B U31L SMFX 5DXB 7YD4 21DF DC3E P7KQ': '@Nanoshi',
    'NQ74 NCRL DALA 537E Q4PE 7BMJ YV28 2RAN A5R8': '@sieucapcutee',
    'NQ89 NC77 U7X0 BBA3 0KS3 NXBU S2GP 5JXP 3BT2': '@green_robot',
    'NQ80 6YJ1 XYMQ R83S 0D99 6L07 KU6G NNXT BGR6': '@Teffin',
    'NQ54 MDED MRG1 E4X9 8SNU R279 NVY7 LDRN XYB1': '@CLRBLND',
    'NQ53 MGV8 5C2N QLEP QMPD 39EL 2RFH D1MV YK1S': '@Ujay',
    'NQ33 4T2T 7TTM AP1F 6KEG 515C 3YTG 36UH JXGC': '@KrisGW_OFFICE',
    'NQ38 K1ND HU3A 1C74 L1HS PUQE VH5L S1RK 3P80': '@Kindhumans',
    'NQ87 RB77 L62X FT8Y 6KKU 9UHB 3N7D L72G M77B': '@Vh',
    'NQ59 RGPU 5TTB 026F TMAD DXTJ SC78 R651 8A72': '@ofik',
    'NQ08 J1XR M1X2 62GM HXHH LS3P SB8J 4JBJ PLCV': '@PLCV',
    'NQ75 P37S 3SR0 Q053 EHA8 AUNT SSSY 0015 4EX3': '@Farhadrad',
    'NQ09 1V5M 2GCN PUEN M866 AAJ7 80BY PDA9 H864': '@keepinmind',
    'NQ59 RGPU 5TTB 026F TMAD DXTJ SC78 R651 8A72': '@CryptoCurrencyKnower',
    'NQ88 2C3V 7V9T 0AAN 2VYL 4C78 0DRC Y19S TUN6': '@mehran',
    'NQ79 TLMN 5FVG EJU8 U7BG SSKY L42B Q50R JTVN': '@Nquar',
    'NQ04 R4N3 08KV DT00 KRH7 TUKP NUEN RQJK 6BU8': '@HackLaddy',
    'NQ07 TTKC LX7U 12KA U2QY TQAF DGBV ND3E 6R45': '@Undefined_Parrot',
    'NQ50 G3DB XK74 VPJR 4Q2E K6D7 AYYL RM3Q JQHH': '@Abel',
    'NQ07 F2PS PMQP 6N8A AULJ T2J4 TQRX FM19 ABB7': '@xrandyx',
    'NQ65 5V00 VU0R QXLY QT4X VSN0 KE2E 24F5 9MMR': '@Thekinglife',
    'NQ37 3T9H D3JD G7M9 FBQ9 UAUT VH6S SKGH EVBE': '@Meni',
    'NQ42 Y7R1 Q9NJ F4BR CPLU 1217 NE2X 6768 5Q6J': '@Fabregat',
    'NQ94 8DYD 5K2H 9EGP QKQL Y5YJ YHSM G25D Y67Y': '@Eljo',
    'NQ82 4GYM AJAK MTP8 9GTS 5B9H 95T2 LDN3 H9YG': '@Leo',
    'NQ11 LQXG BTBM G2XJ BLA1 4NLJ MF3P V7V3 PVMP': '@yousufX',
    'NQ75 T6XN SR7G SNGH GA6X 5NRE X6LX N492 3CEX': '@amirhaji93',
    'NQ57 X0PN KFL0 TU8N 1AP1 B5JS 38U8 RQMQ JKC4': '@20_dc',
    'NQ45 8VRH QASQ UL1J HPTN 578Q 2J21 NQT6 VPX5': '@Dan',
    'NQ30 1U5L SN0K RREJ DUH0 Y3VA 8KE6 SHFR F8BF': '@Tchum',
    'NQ53 PCLY SAMG E27D 3P41 E3AN Y84J RQFU TMGT': '@CLRBLND',
    'NQ20 4HNE 1BYB 7R7A UYRK BGB5 VFT3 4627 G0E3': '@KalKal',
    'NQ67 HQU2 G83Y 19X9 L29G 1HR3 DVA7 PMNL 6YL0': '@lep56-8-a',
    'NQ95 SXMQ 96ES HBK7 BBJP S23A H3C5 KECM 66A6': '@Midgard1',
    'NQ92 1RRD X6R4 A6Q8 HL2B 31K5 DSJL 7FLK 1DA9': '@Rinat',
    'NQ79 2V9M HK24 553J CTFU QY9A LB4D E1UC DUTM': '@Lion.R',
    'NQ92 4C9H BETX BA4H R2SL JQCC BDJE 3JMN PT7A': '@JEFFURLAN',
    'NQ07 742E HG5N DQX8 YSQ1 EDU0 76LQ 4RN1 NXNY': '@Bit',
    'NQ47 2GNP 8BDT A9BH S48T AM8U AUXT M2RU LS18': '@nitori',
    'NQ74 5KKU 89L1 MCVS ANMJ MTHA 4RK7 HBB7 RQTF': '@Agycgu',
    'NQ75 L4FN AT1L MMH7 VLYS YGK5 3P1R JHY5 QQ72': '@Behzad',
    'NQ90 K9P1 E8LX 286V XEHC 703V 8E5V QEC9 6MCL': '@Akbarkarimi5113',
    'NQ17 MUAT N6U9 C17U THC2 59GR VA57 JC4D F28P': '@Gromu',
    'NQ93 8Y53 AKLY LVX8 2G6N C4NX 944M X0GY CLV2': '@armin',
    'NQ35 NPKG HAUG Q3DL R597 U76F 5YLQ 2HHH FDUM': '@wildone2021',
    // '': '@',

    // Exchanges
    'NQ81 846T N9DB TD11 VJTU C7UP JLAH M6QQ 6UPB': 'HitBTC',
    'NQ55 UE76 E517 CKDR MADX 6SY9 PR70 K1XE FHM1': 'HitBTC Cold Wallet',
    'NQ57 EMG8 S4QY GE3B K4CB MQ4E 0SUS 6UT9 JFC0': 'TradeSatoshi',
    'NQ89 AAMN QJFF 7RKS 4XX0 EFXN M4QG 4MYH HMBJ': 'Changelly',
    'NQ13 XAME QAMX 3302 13E3 ECXQ HU88 TM6R YKVK': 'KuCoin', // Payouts
    'NQ16 HP6H 5CHC QQMD 5BE3 AFCQ QUJ9 4451 NKSM': 'KuCoin', // Payouts
    'NQ27 B9ED 98G5 3VH7 FY8D BFP0 XNF4 BD8L TN4B': 'KuCoin', // Payins
    'NQ04 B79B R4FF 4NGU A9H0 2PT9 9ART 5A88 J73T': 'KuCoin Cold',
    'NQ66 QDMD SRPT B2A4 JBGJ 30M6 LBPN EK9N LR74': 'HotBit',
    'NQ17 1XMK VKC4 BHAA QH1X TH6G NC3V 40RH 8GN2': 'ChangeHero',
    'NQ37 KVUA EHER E5VA C7M0 1PF5 YBRA GE5C RB6K': 'ChangeHero',
    'NQ68 J3A4 1NXK DXCE GFBJ 24P7 XH7K 06GB 6GFV': 'Bitladon',
    'NQ69 NAL3 CH6V 42T4 QTLL 66D3 M9UH 7H40 0TT0': 'ChangeHero', // ?
    'NQ55 9V7S LG7M 6G1K D761 TPYJ 3T90 JCEF N8YH': 'LATOKEN', // ?
    'NQ61 A1PT PHFU 7FV9 X3PL GUXC E0HD SL4A 05X8': 'Bitmax', // ?
    // '': '',
    // '': '',

    // Testnet
    'NQ31 QEPR ED7V 00KC P7UC P1PR DKJC VNU7 E461': 'pool.nimiq-testnet.com',
    'NQ36 P00L 1N6T S3QL KJY8 6FH4 5XN4 DXY0 L7C8': 'NIMIQ.WATCH Testnet-Pool',
    'NQ50 CXGC 14C6 Y7Q4 U3X2 KF0S 0Q88 G09C PGA0': 'SushiPool TESTNET',
    'NQ26 XM1G BFAD PACE R5L0 C85L 6143 FD8L 82U9': 'Nimiq Shop (Testnet)',
    'NQ76 F8M9 1VJ9 K88B TXDY ADT3 F08D QLHY UULK': 'Nimiq Bar (Testnet)',
    'NQ54 8LN7 9DX7 XG20 1XK8 GGGT Y2UU 2DDT BKLV': 'UberPool (Testnet)',
    'NQ17 D2ES UBTP N14D RG4E 2KBK 217A 2GH2 NNY1': 'Fastspot (Testnet)',
    'NQ12 0XL5 5KUC 7LAM NUNA 59BV XE4K 6SDT 5E0A': 'ROYAL NIM CASINO (Testnet)',
    'NQ60 29BE CJUY U9PA GNNE RTXC HF6K C8D3 K36L': 'Nimiq Lottery (Testnet)',
}
