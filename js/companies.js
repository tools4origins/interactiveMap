"use strict";
window.app = window.app || {};

window.app.companiesBySector = {
    aeronautique: {
        name: "Aéronautique",
        color: "red",
        companies: [
            {
                name: "Safran",
                logoSrc: "safran.png",
                locationId: "B3",
                pages: [114,115]
            }, {
                name: "Thales",
                logoSrc: "thales.png",
                locationId: "B27",
                pages: [120,121]
            }, {
                name: "Airbus Defense & Space",
                logoSrc: "airbusdefense.png",
                locationId: "C22",
                pages: [222,223]
            }
        ]
    },
    auditConseil: {
        name: "Audit / Conseil",
        color: "green",
        companies: [
            {
                name: "Mazars",
                logoSrc: "mazars.png",
                locationId: "C24",
                pages: [50,51]
            }, {
                name: "Accenture",
                logoSrc: "accenture.png",
                locationId: "C21",
                pages: [26,27]
            }, {
                name: "Capgemini consulting",
                logoSrc: "capgemini-consulting.png",
                locationId: "A31",
                pages: [36,37]
            }, {
                name: "Solucom",
                logoSrc: "solucom.png",
                locationId: "C12",
                pages: [64,65]
            }, {
                name: "NetXP",
                logoSrc: "netxp.png",
                locationId: "B17",
                pages: [54,55]
            }, {
                name: "EY",
                logoSrc: "ernst_and_young.png",
                locationId: "A14",
                pages: [44,45]
            }, {
                name: "Beijaflore",
                logoSrc: "beijaflore.png",
                locationId: "C6",
                pages: [32,33]
            }, {
                name: "Lavoix",
                logoSrc: "lavoix.png",
                locationId: "B10",
                pages: [48,49]
            }, {
                name: "MC²I Groupe",
                logoSrc: "mc2i.png",
                locationId: "A39",
                pages: [52,53]
            }, {
                name: "PwC",
                logoSrc: "pwc.png",
                locationId: "C16",
                pages: [58,59]
            }, {
                name: "Setec",
                logoSrc: "setec.png",
                locationId: "A11",
                pages: [60,61]
            }, {
                name: "T&T Consulting",
                logoSrc: "t_and_t_consulting.png",
                locationId: "A2",
                pages: [66,67]
            }, {
                name: "Alten",
                logoSrc: "alten.png",
                locationId: "A9",
                pages: [28,29]
            }, {
                name: "BearingPoint",
                logoSrc: "bearingpoint.png",
                locationId: "C20",
                pages: [30,31]
            }, {
                name: "Sia Partners",
                logoSrc: "sia_conseil.png",
                locationId: "A34",
                pages: [62,63]
            }, {
                name: "1000mercis",
                logoSrc: "1000mercis.png",
                locationId: "Start-Up/PME",
                pages: [176,177]
            }, {
                name: "Devoteam Consulting",
                logoSrc: "devoteam.png",
                locationId: "B24",
                pages: [148,149]
            }, {
                name: "Altran",
                logoSrc: "altran.png",
                locationId: "A43",
                pages: [228,229]
            }, {
                name: "Provadys",
                logoSrc: "provadys.png",
                locationId: "A1",
                pages: [56,57]
            }, {
                name: "Cereza Conseil",
                logoSrc: "cereza.png",
                locationId: "C2",
                pages: [38,39]
            }, {
                name: "Bluestone Consulting",
                logoSrc: "bluestone.jpg",
                locationId: "B26",
                pages: [34,35]
            }, {
                name: "Ekimetrics",
                logoSrc: "ekimetrics.jpg",
                locationId: "B31",
                pages: [40,41]
            }, {
                name: "KPMG",
                logoSrc: "kpmg.png",
                locationId: "C23",
                pages: [46,47]
            }, {
                name: "Eurogroup Consulting",
                logoSrc: "eurogroupconsulting.jpg",
                locationId: "A6",
                pages: [42,43]
            }, {
                name: "Octo Technology",
                logoSrc: "octo.png",
                locationId: "C10",
                pages: [248,249]
            }, {
                name: "Artik Consulting",
                logoSrc: "artik.jpg",
                locationId: "A35",
                pages: [233,234]
            }
        ]
    },
    banquesAssurances: {
        name: "Banques / Assurances",
        color: "blue",
        companies: [
            {
                name: "Société Générale",
                logoSrc: "socgen.png",
                locationId: "B13",
                pages: [74,75]
            }, {
                name: "HSBC",
                logoSrc: "hsbc.png",
                locationId: "B28",
                pages: [72,73]
            }, {
                name: "BNP Parisbas",
                logoSrc: "bnp.png",
                locationId: "A48",
                pages: [71]
            }, {
                name: "Credit agricole",
                logoSrc: "creditagricole.png",
                locationId: "A32",
                pages: [237,238]
            }
        ]
    },
    constructeurEquipement: {
        name: "Constructeurs d’équipements",
        color: "yellow",
        companies: [
            {
                name: "Alcatel-Lucent",
                logoSrc: "alcatel.png",
                locationId: "C4",
                pages: [226,227]
            }, {
                name: "Sagemcom",
                logoSrc: "sagem.png",
                locationId: "B30",
                pages: [253]
            }
        ]
    },
    electronique: {
        name: "Électronique / Micro-électronique",
        color: "gray",
        companies: [
            {
                name: "ARM",
                logoSrc: "arm.png",
                locationId: "B33",
                pages: [158,159]
            }, {
                name: "Parrot SA",
                logoSrc: "parrot.png",
                locationId: "C1",
                pages: [106,107]
            }, {
                name: "Keecker",
                logoSrc: "keecker.png",
                locationId: "Start-Up/PME",
                pages: [182,183]
            }, {
                name: "Withings",
                logoSrc: "withings.jpg",
                locationId: "A37",
                pages: []
            }
        ]
    },
    energie: {
        name: "Énergie",
        color: "orange",
        companies: [
            {
                name: "EDF",
                logoSrc: "edf.png",
                locationId: "B20",
                pages: [241,242]
            }, {
                name: "RTE",
                logoSrc: "rte.png",
                locationId: "A10",
                pages: [112,113]
            }, {
                name: "EIFFAGE Energie",
                logoSrc: "eiffage-energie.png",
                locationId: "A40",
                pages: [162,163]
            }
        ]
    },
    industrie: {
        name: "Industrie",
        color: "chocolate",
        companies: [
            {
                name: "Schlumberger",
                logoSrc: "schlumberger.png",
                locationId: "C11",
                pages: [116,117]
            }, {
                name: "DCNS",
                logoSrc: "dcns.png",
                locationId: "C25",
                pages: [102,103]
            }, {
                name: "Oberthur",
                logoSrc: "oberthur.png",
                locationId: "B32",
                pages: []
            }, {
                name: "GE Health",
                logoSrc: "ge_healthcare.png",
                locationId: "B18",
                pages: [104,105]
            }, {
                name: "PSA",
                logoSrc: "peugeot.png",
                locationId: "C17",
                pages: [108,109]
            }, {
                name: "Renault",
                logoSrc: "renault.jpg",
                locationId: "A46",
                pages: [110,111]
            }
        ]
    },
    informatique: {
        name: "Informatique / Développement logiciel",
        color: "fuchsia",
        companies: [
            {
                name: "Murex",
                logoSrc: "murex.png",
                locationId: "C5",
                pages: [94,95]
            }, {
                name: "Microsoft engineering",
                logoSrc: "microsoft.png",
                locationId: "A12",
                pages: [92,93]
            }, {
                name: "Amadeus",
                logoSrc: "amadeus_new.png",
                locationId: "C19",
                pages: [78,79]
            }, {
                name: "Gemalto",
                logoSrc: "gemalto.png",
                locationId: "C7",
                pages: [86,87]
            }, {
                name: "Dassault Systèmes",
                logoSrc: "dassault.png",
                locationId: "B5",
                pages: [82,83]
            }, {
                name: "Theodo",
                logoSrc: "theodo.png",
                locationId: "C8",
                pages: [98,99]
            }, {
                name: "Inovia Team",
                logoSrc: "inovia.png",
                locationId: "C3",
                pages: [245,246]
            }, {
                name: "Yelp",
                logoSrc: "yelp.jpg",
                locationId: "B29",
                pages: [172,173]
            }, {
                name: "Efront",
                logoSrc: "efront.png",
                locationId: "B19",
                pages: [84,85]
            }, {
                name: "Sublime SKINZ",
                logoSrc: "sublimeskinz.jpg",
                locationId: "Start-Up/PME",
                pages: [196,197]
            }, {
                name: "Jump Informatique",
                logoSrc: "jumpinformatique.jpg",
                locationId: "A42",
                pages: [88,89]
            }, {
                name: "Bloomberg",
                logoSrc: "Bloomberg.jpg",
                locationId: "A29",
                pages: [80,81]
            }, {
                name: "Melusyn",
                logoSrc: "melusyn.jpg",
                locationId: "Start-Up/PME",
                pages: [186,187]
            }, {
                name: "Magency Digital",
                logoSrc: "magency.png",
                locationId: "Start-Up/PME",
                pages: [346,347,247]
            }, {
                name: "Addengo",
                logoSrc: "addengo.png",
                locationId: "Start-Up/PME",
                pages: []
            }, {
                name: "Pricematch",
                logoSrc: "pricematch.png",
                locationId: "Start-Up/PME",
                pages: [190,191]
            }, {
                name: "Mevia",
                logoSrc: "mevia.png",
                locationId: "Start-Up/PME",
                pages: [230,231]
            }, {
                name: "Linagora",
                logoSrc: "linagora.gif",
                locationId: "B21",
                pages: []
            }, {
                name: "Upslide",
                logoSrc: "upslide.jpg",
                locationId: "Start-Up/PME",
                pages: []
            }, {
                name: "BAM",
                logoSrc: "bam.png",
                locationId: "Start-Up/PME",
                pages: [235,236]
            }, {
                name: "DxO",
                logoSrc: "dxo.png",
                locationId: "Start-Up/PME",
                pages: []
            }, {
                name: "Ubisoft",
                logoSrc: "ubisoft.png",
                locationId: "B22",
                pages: [258,259]
            }
        ]
    },
    operateurTelecom: {
        name: "Opérateurs de Télécommunications",
        color: "tan",
        companies: [
            {
                name: "Groupe Numéricable-SFR",
                logoSrc: "sfr.jpg",
                locationId: "B2",
                pages: [126,127]
            }, {
                name: "Orange",
                logoSrc: "orange.png",
                locationId: "B23",
                pages: [128,129]
            }, {
                name: "Bouygues Télécom",
                logoSrc: "bouygues.png",
                locationId: "B8",
                pages: [124,125]
            }, {
                name: "Outscale",
                logoSrc: "outscale.png",
                locationId: "A30",
                pages: [250,251]
            }, {
                name: "TDF",
                logoSrc: "tdf.jpg",
                locationId: "B1",
                pages: [256,257]
            }, {
                name: "Legos",
                logoSrc: "legos.png",
                locationId: "Start-Up/PME",
                pages: [184,185]
            }, {
                name: "Sopelec",
                logoSrc: "scopelec.jpg",
                locationId: "A36",
                pages: [255]
            }
        ]
    },
    esn: {
        name: "ESN (ex-SSII)",
        color: "skyblue",
        companies: [
            {
                name: "Sopra Steria",
                logoSrc: "soprasteria.png",
                locationId: "B16",
                pages: [96,97]
            }, {
                name: "Klee Group",
                logoSrc: "klee.png",
                locationId: "A7",
                pages: [90,91]
            }, {
                name: "Spie Commmunications",
                logoSrc: "spie.png",
                locationId: "A33",
                pages: []
            }, {
                name: "Jems Partner",
                logoSrc: "jems.png",
                locationId: "A5",
                pages: [150,151]
            }, {
                name: "Telindus",
                logoSrc: "telindus.png",
                locationId: "B2",
                pages: [168,169]
            }, {
                name: "CGI",
                logoSrc: "cgi.png",
                locationId: "B34",
                pages: [144,145]
            }, {
                name: "Capgemini",
                logoSrc: "capgemini.png",
                locationId: "C13",
                pages: [142,143]
            }, {
                name: "SII",
                logoSrc: "sii.png",
                locationId: "A3",
                pages: [154,155]
            }, {
                name: "Atos",
                logoSrc: "atos.png",
                locationId: "A13",
                pages: [138,139]
            }, {
                name: "CS Système",
                logoSrc: "cs.png",
                locationId: "A8",
                pages: [146,147]
            }, {
                name: "Arismore",
                logoSrc: "arismore.png",
                locationId: "B25",
                pages: [136,137]
            }, {
                name: "Cap Fi",
                logoSrc: "capFiGroupe.jpg",
                locationId: "A41",
                pages: [140,141]
            }, {
                name: "Protectic",
                logoSrc: "protectic.jpg",
                locationId: "Start-Up/PME",
                pages: [152,153]
            }
        ]
    },
    transports: {
        name:"Transports",
        color:"springgreen",
        companies: [
            {
                name: "SNCF",
                logoSrc: "sncf.png",
                locationId: "C15",
                pages: [118,119]
            }, {
                name: "RATP",
                logoSrc: "ratp.png",
                locationId: "B6",
                pages: [164,165]
            }, {
                name: "Blablacar",
                logoSrc: "blablacar.jpg",
                locationId: "Start-Up/PME",
                pages: [178,179]
            }
        ]
    },
    troisiemeCycle: {
        name: "3ème Cycle",
        color: "royalblue",
        companies: [
            {
                name: "Télécom Lille",
                logoSrc: "telecom-lillep.png",
                locationId: "Écoles",
                pages: [21]
            }, {
                name: "Eurecom",
                logoSrc: "eurecom.png",
                locationId: "Écoles",
                pages: [12,13]
            }, {
                name: "HEC",
                logoSrc: "hec.png",
                locationId: "B11",
                pages: [200,201]
            }, {
                name: "Télécom SudParis",
                logoSrc: "telecomsudparis.png",
                locationId: "Écoles",
                pages: [14,15,16,17]
            }, {
                name: "Télécom EM",
                logoSrc: "tem.png",
                locationId: "Écoles",
                pages: [18,19]
            }, {
                name: "Télécom ParisTech",
                logoSrc: "paristech.png",
                locationId: "Écoles",
                pages: [8,9,10,11]
            }, {
                name: "Télécom Bretagne",
                logoSrc: "telecombretagne.png",
                locationId: "Écoles",
                pages: [20]
            }
        ]
    },
    autres: {
        name:"Autres",
        color:"thistle",
        companies: [
            {
                name: "Canal+",
                logoSrc: "canalplus.png",
                locationId: "A44",
                pages: [160,161]
            }, {
                name: "TF1",
                logoSrc: "tf1.png",
                locationId: "B8",
                pages: [130,131]
            }, {
                name: "Sprint JE",
                logoSrc: "sprint.png",
                locationId: "Start-Up/PME",
                pages: [194,195]
            }, {
                name: "Telecom Etude",
                logoSrc: "telecometude.png",
                locationId: "Start-Up/PME",
                pages: [206]
            }, {
                name: "Autorité des marchés financiers",
                logoSrc: "amf.jpg",
                locationId: "B15",
                pages: [232]
            }, {
                name: "T&M Alumni",
                logoSrc: "tma.png",
                locationId: "Écoles",
                pages: [211]
            }, {
                name: "ParisTech Alumni",
                logoSrc: "telecomparisalumni.png",
                locationId: "Écoles",
                pages: [207]
            }, {
                name: "Danone",
                logoSrc: "danone.jpg",
                locationId: "B9",
                pages: [239,240]
            }, {
                name: "Sogetrel",
                logoSrc: "sogetrel.png",
                locationId: "A4",
                pages: [166,167]
            }, {
                name: "ANSSI",
                logoSrc: "anssi.png",
                locationId: "C9",
                pages: [134,135]
            }, {
                name: "Alan Allman Associates",
                logoSrc: "alan_allman_associates.png",
                locationId: "A45",
                pages: [224,225]
            }, {
                name: "AIESEC",
                logoSrc: "aiesec.png",
                locationId: "B12",
                pages: []
            }, {
                name: "JobTeaser",
                logoSrc: "jobteaser.png",
                locationId: "A38",
                pages: []
            }
        ]
    }
};

// preload images
for(var sectorId in window.app.companiesBySector) {
    var sectorCompanies = window.app.companiesBySector[sectorId].companies;
    for(var companyId in sectorCompanies) {
        var company = sectorCompanies[companyId];
        company.logo = new Image();
        company.logo.src = "images/logos_exposants/"+company.logoSrc;

        // correction numéro pages
        for(var pageId in sectorCompanies[companyId].pages) {
            company.pages[pageId]--;
        }
    }
}


// Sort the list of exposant alphabetically
window.app.alphaSortExponent = function(elem1, elem2) {
    if(elem1.name < elem2.name) {
        return -1;
    }
    if(elem1.name > elem2.name) {
        return 1;
    }
   return 0;
};
for(var sectorId in window.app.companiesBySector) {
    var companies = window.app.companiesBySector[sectorId].companies;
    companies.sort(window.app.alphaSortExponent);
}

window.app.getCompanies = function() {
    var companies = [];
    for(var sectorId in this.companiesBySector) {
        var sectorCompanies = this.companiesBySector[sectorId].companies;
        for(var companyId in sectorCompanies) {
            companies.push(sectorCompanies[companyId]);
        }
    }
    return companies;
};

window.app.getCompaniesByLocation = function(locationId) {
    var returnedCompanies=[];
    for(var sectorId in this.companiesBySector) {
        var sectorCompanies = this.companiesBySector[sectorId].companies;
        for(var companyId in sectorCompanies) {
            var company = sectorCompanies[companyId];
            if(company.locationId==locationId) {
                returnedCompanies.push(company);
            }
        }
    }
    return returnedCompanies;
};

window.app.getCompanyByName = function(name) {
    for(var sectorId in this.companiesBySector) {
        var sectorCompanies = this.companiesBySector[sectorId].companies;
        for(var companyId in sectorCompanies) {
            var company = sectorCompanies[companyId];
            if(company.name==name) {
                return company;
            }
        }
    }
};