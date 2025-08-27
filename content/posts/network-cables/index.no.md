+++
title = "Nettverkskabling"
date = "2025-06-14"
draft = false
tags = ["ethernet", "fiber optics", "CCNA"]
categories = ["Nettverk", "Kabling"]
description = "Forstå nettverkskabling: koaksial, tvunnet parkabel og fiberoptiske kabler for CCNA‑forberedelse"
summary = "En oversikt over nettverkskabling, inkludert koaksialkabler, tvunnet parkabel (UTP og STP) og fiberoptikk. Lær om oppbygning, typer og hvordan de påvirker ytelse. Nyttig for CCNA‑forberedelser."
+++

Kabling er den fysiske livslinjen som frakter data i nettverket. Det kan ikke overdrives hvor viktig kabling er, fordi den direkte påvirker ytelse, skalerbarhet og pålitelighet.

## Koaksialkabler

Tidligere var koaksial ryggraden i mange nettverk, og den brukes fortsatt i enkelte spesialiserte miljøer. I kablede nett blir leder ofte laget av kobber, ettersom kobber leder strøm godt og har høy strekkfasthet. De to vanligste kobberkablene du møter i nettverk er koaksialkabler (coax) og tvunnet parkabel.

Koaksial er konstruert med ett hovedmål: å beskytte mot elektromagnetisk interferens (EMI). Vi vil ikke at elektromagnetiske bølger i omgivelsene, som radiobølger, skal fanges opp av kabelen og forstyrre data. Samtidig vil vi ikke at kabelen skal fungere som en antenne og sende ut forstyrrelser.

![Koaksialkabel – oppbygning](coax-cable.png)

Et koaksialkabel beskytter signalet ved at det sendes i en senterleder (vanligvis kobber) omgitt av et dielektrisk isolasjonslag. Rundt dette ligger ofte en folieskjerm som demper EMI, og utenpå der igjen en flettet metalskjerm for ytterligere beskyttelse. Alt omsluttes av en ytre plastkappe.

## Typer koaksialkabler

Vanlige typer er RG‑59 og RG‑6 (ofte i hjemmenett), RG‑58 (eldre 10BASE2), og RG‑8/U (eldre 10BASE5).

![Typer koaksialkabler](coax-cable-type.png)

## Tvunnet parkabel

Tvunnet parkabel er svært utbredt i dag.

### Uskjermet tvunnet parkabel (UTP)

Parene tvinnes for å motvirke EMI. To gode ledere tvinnes slik at hver leder «skjermer» den andre. I UTP er det ingen ekstra skjerm (ingen folie) – kun tvistingen gir beskyttelse.

![UTP‑kabel](unshielded-twisted-pair-cable.png)

### Skjermet tvunnet parkabel (STP)

Når UTP ikke er nok – f.eks. i miljøer med mye EMI – brukes STP. Her tvinnes parene som vanlig, men hvert par er i tillegg folieskjermet. Noen STP‑varianter har også flettet skjerm rundt alle åtte lederne.

![STP‑kabel](shielded-twisted-pair-cable.png)

STP koster mer (mer materiale), mens UTP oftest er rimeligst og mest brukt. STP kan på grunn av bedre skjerming ofte støtte høyere datahastigheter.

### Plenum‑klassifisert kabling

Plenumområder er f.eks. over nedsenket tak eller under hevet gulv som brukes av ventilasjonsanlegg (HVAC) til luftretur. Vanlig kabel i slike områder kan avgi giftige gasser ved brann. Plenum‑klassifiserte kabler er laget for å begrense dette.

![Plenum‑kabel](plenum-rated-cable.png)

### Kontakter

RJ‑45 er vanligst for Ethernet. RJ‑11 og RJ‑14 brukes for telefoni.

![Kontakttyper for tvunnet parkabel](connectors.png)

### Terminering – standarder

Det finnes standarder for hvilke farger som skal i hvilke pinner. De vanligste er T568A og T568B. Ingen er «bedre» – viktigst er å bruke samme standard i begge ender og i patchpanel/jack. I praksis er T568B mest brukt i dag.

![T568‑standarder](T568-wiring-standards.png)

## Ethernet‑standarder for tvunnet parkabel

Tvunnet parkabel deles inn i kategorier. Ulike Ethernet‑standarder krever ulike kategorier og har egne grenser for hastighet og avstand.

![Ethernet‑standarder](ethernet-standards.png)

## Ethernet‑kabeltyper

En typisk Ethernet‑kabel har RJ‑45 i begge ender. Hver kontakt har åtte pinner. Kabler er enten rettede (straight‑through) eller kryssede (crossover).

![RJ‑45‑kontakter](ethernet-cable-types.png)

For å forstå forskjellen på rette og kryssede kabler, må vi se hvordan ulike enheter sender/mottar på RJ‑45.

**PCer, rutere og trådløse aksesspunkter (MDI)** bruker pinnene **1** og **2** til å sende, og **3** og **6** til å motta.

![Enheter som sender på 1&2 og mottar på 3&6](pins-1.gif)

**Huber, broer og svitsjer (MDI‑X)** gjør det motsatte: sender på **3** og **6**, og mottar på **1** og **2**.

![Enheter som sender på 3&6 og mottar på 1&2](pins-2.gif)

### Rett kabel (Straight‑Through)

En rett kabel kobler pinne **1** i den ene enden til pinne **1** i den andre, osv.

![Pinout for rett kabel](Straight-Through-pinout.png)

Kobler du en MDI‑enhet til en MDI‑X‑enhet med rett kabel (f.eks. PC → svitsj), fungerer det – fordi utsending på den ene matcher mottak på den andre.

![Rett kobling](straight-through-connection.gif)

Men kobler du to like enheter (f.eks. ruter → ruter) med rett kabel, vil begge sende på **1&2** og motta på **3&6**, så signalene «møtes» og ingen mottar korrekt.

![Rett kabel mellom like enheter – problem](straight-through-issue.gif)

### Krysskoblet kabel (Crossover)

Løsningen er å krysse lederne slik at send på den ene siden treffer mottak på den andre – og omvendt.

![Crossover‑kabel](crossover-cable.gif)

### Moderne nett

I dag har mye utstyr **auto MDI‑X** og forhandler automatisk hvem som bruker hvilke pinner til send/motta. I nyere standarder med høyere hastigheter brukes alle 8 pinnene for både sending og mottak.

### 10BASE‑T og 100BASE‑TX (eldre)

- **Hastighet**: 10 og 100 Mb/s
- **Pinner brukt**: 4 ledere (1, 2, 3, 6)
- **Pinnene 4, 5, 7, 8**: Ikke brukt

### 1000BASE‑T (Gigabit Ethernet)

- **Hastighet**: 1 Gb/s
- **Pinner brukt**: Alle 8
- **Endring**: Krever alle par

![Gigabit – bruk av alle lederne](all-wire-used.png)

## Fiberoptiske kabler

Fiber gir en stor fordel over kobber: **immunitet mot EMI**. Kobber bruker elektromagnetiske bølger; fiber bruker lys – og påvirkes ikke av EMI.

## Fysikken bak fiber

### Brytningsindeks

Grunnprinsippet er **brytningsindeks**. Lys endrer retning og hastighet når det går mellom medier med ulik indeks (f.eks. luft → glass).

![Brytning](refraction_photo.png)

### Fiberens oppbygning

En fiber består av to glasslag med ulik brytningsindeks:

- **Kjerne**: Innerste glasset der lyset går
- **Kledning**: Ytre glasslaget rundt kjernen

![Fiber – oppbygning](fiber-optic-1.png)

Under produksjon doper man kjernen/kledningen ulikt, slik at lyset «holder seg» i kjernen ved totalrefleksjon og ikke lekker ut i kledningen.

## Typer fiber

### Multimode‑fiber (MMF)

- **Kjerne**: Større
- **Lysbaner**: Flere moduser (flere mulige stier)
- **Avstand**: Omtrent opptil 2 km

### Singlemode‑fiber (SMF)

- **Kjerne**: Mye mindre
- **Lysbaner**: Én modus (én sti)
- **Avstand**: Betydelig lengre enn MMF

## Hva betyr «modus»?

En **modus** er en bestemt lysbane gjennom fiberen. Større kjerne = flere mulige baner; mindre kjerne = bare én.

![Lysmoduser i fiber](fiber-optic-2.png)

## Multimode‑forsinkelsesforvrengning

I MMF kan ulike lysbaner bruke ulik tid: en «hoppete» vei kan bli tregere enn en mer direkte. Over lange lengder kan bitene «bytte plass» og korruptere data. Dette begrenser MMF‑avstander.

## Hvorfor singlemode løser dette

SMF har så liten kjerne at det bare finnes én vei for lyset. Alle biter går samme rute, og ingen kan «ta igjen» en annen – derfor er lange avstander mulig uten slik forvrengning.

## Ethernet‑standarder for fiber

Også fiber klassifiseres etter hastighet og avstand.

![Ethernet‑standarder for fiber](ethernet-standards-fiber.png)

## Fiberkontakter

Vanlige kontakter er SC, LC, ST og MT‑RJ. De sørger for korrekt justering og pålitelig signaloverføring.

![Fiberkontakter](fiber-connectors.png)

## Referanser

1. <https://www.phoenixcontact.com/en-pc/technologies/copper-based-data-cabling>
2. <https://tripplite.eaton.com/products/ethernet-cable-types>
3. <https://en.wikipedia.org/wiki/Medium-dependent_interface>
4. <https://en.wikipedia.org/wiki/Refractive_index>
5. <https://rfindustries.com/fiber-optic-cable-types-multimode-and-single-mode/>

