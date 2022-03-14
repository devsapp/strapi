"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2246],{50345:e=>{e.exports=JSON.parse('{"ComponentIconPicker.search.placeholder":"S\xf8g efter ikon","attribute.boolean":"Boolean","attribute.boolean.description":"Ja eller nej, 1 eller 0, sand eller falsk","attribute.component":"Komponent","attribute.component.description":"Gruppe af felter som kan gentages","attribute.date":"Dato","attribute.date.description":"En datov\xe6lger med timer, minutter og sekunder","attribute.datetime":"Dato - tid","attribute.dynamiczone":"Dynamisk zone","attribute.dynamiczone.description":"Dynamisk udv\xe6lg komponenter ved redigering af indhold","attribute.email":"E-mail","attribute.email.description":"E-mail felt med valideringsformat","attribute.enumeration":"Enumeration","attribute.enumeration.description":"Liste med v\xe6rdier, v\xe6lg \xe9n","attribute.json":"JSON","attribute.json.description":"Data i JSON format","attribute.media":"Medie","attribute.media.description":"Filer som billeder, videoer, osv...","attribute.null":" ","attribute.number":"Tal","attribute.number.description":"Tal (hele tal, kommatal)","attribute.password":"Kodeord","attribute.password.description":"Kodeord med kryptering","attribute.relation":"Relation","attribute.relation.description":"Reference til en dokument type","attribute.richtext":"RTE","attribute.richtext.description":"En rich-text-editor med formateringsmuligheder","attribute.text":"Tekst","attribute.text.description":"Korte eller lange tekster som titel eller beskrivelse","attribute.time":"Tid","attribute.timestamp":"Tidsstempel","attribute.uid":"UID","attribute.uid.description":"Unikt ID","button.attributes.add.another":"Tilf\xf8j et felt","button.component.add":"Tilf\xf8j et komponent","button.component.create":"Opret komponent","button.model.create":"Opret dokument type","button.single-types.create":"Opret enkelt type","component.repeatable":"(gentageligt)","components.SelectComponents.displayed-value":"{number, plural, =0 {# komponenter} one {# komponent} other {# komponenter}} valgt","components.componentSelect.no-component-available":"Du har allerede tilf\xf8jet alle dine komponenter","components.componentSelect.no-component-available.with-search":"Der er ingen komponenter som matcher din s\xf8gning","components.componentSelect.value-component":"{number} komponent valgt (skriv for at s\xf8ge efter komponenter)","components.componentSelect.value-components":"{number} komponenter valgt","configurations":"konfigurationer","contentType.apiId-plural.description":"API ID i flertal","contentType.apiId-plural.label":"API ID (flertal)","contentType.apiId-singular.description":"UID bliver brugt til at generere API routes og database tabeller/kollektion","contentType.apiId-singular.label":"API ID (ental)","contentType.collectionName.description":"Brugbar n\xe5r navnet p\xe5 din indholdstype og dit tabel navn er forskellige","contentType.collectionName.label":"Dokument navn","contentType.displayName.label":"Visningsnavn","contentType.draftAndPublish.description":"Opret en version som udkast for hvert element inden det offentligg\xf8res","contentType.draftAndPublish.label":"Udkast/offentligg\xf8r system","contentType.kind.change.warning":"Du har lige \xe6ndret typen af en indholdstype: API bliver nustillet (ruter, controllere, og services bliver overskrevet).","error.attributeName.reserved-name":"Dette navn kan ikke bruges i din indholdstype, da det m\xe5ske kan \xf8del\xe6gge andre funktioner","error.contentType.pluralName-used":"Denne v\xe6rdi kan ikke v\xe6re den samme som ved ental","error.contentType.singularName-used":"Denne v\xe6rdi kan ikke v\xe6re den samme som ved flertal","error.contentTypeName.reserved-name":"Dette navn kan ikke bruges i dit projekt, da det m\xe5ske kan \xf8del\xe6gge andre funktioner","error.validation.enum-duplicate":"Duplikat v\xe6rdi er ikke tilladt","error.validation.enum-empty-string":"Tomme strenge er ikke tilladt","error.validation.minSupMax":"M\xe5 ikke overstige","error.validation.positive":"Skal v\xe6re et positivt tal","error.validation.regex":"Regex m\xf8nster er ikke gyldig","error.validation.relation.targetAttribute-taken":"Dette navn eksisterer allerede","form.attribute.component.option.add":"Tilf\xf8j et komponent","form.attribute.component.option.create":"Opret et komponent","form.attribute.component.option.create.description":"Et komponent er delt mellem typer og komponenter, det bliver tilg\xe6ngeligt fra alle steder.","form.attribute.component.option.repeatable":"Gentageligt komponent","form.attribute.component.option.repeatable.description":"Bedst til gentagne v\xe6rdier af f.eks. ingredienser, meta tags, osv...","form.attribute.component.option.reuse-existing":"Brug et eksisterende komponent","form.attribute.component.option.reuse-existing.description":"Genbrug en komponent der allerede er oprettet for at holde din data konsistent gennem indholdstyper.","form.attribute.component.option.single":"Enkelt komponent","form.attribute.component.option.single.description":"Bedst til at gruppere felter som fulde adresse, prim\xe6r information osv...","form.attribute.item.customColumnName":"Specielle kolonne navne","form.attribute.item.customColumnName.description":"Dette er brugbart til at omd\xf8be database kolonne navne i et mere omfattende format til API svar","form.attribute.item.date.type.date":"dato","form.attribute.item.date.type.datetime":"dato - tid","form.attribute.item.date.type.time":"tid","form.attribute.item.defineRelation.fieldName":"Felt navn","form.attribute.item.enumeration.graphql":"Navn overskrivning til GraphQL","form.attribute.item.enumeration.graphql.description":"Tillader dig at overskrive standard genereret navn til GraphQL","form.attribute.item.enumeration.placeholder":"F.eks.\\nmorgen\\nmiddag\\naften","form.attribute.item.enumeration.rules":"V\xe6rdier (\xe9n linje pr. v\xe6rdi)","form.attribute.item.maximum":"Maks v\xe6rdi","form.attribute.item.maximumLength":"Maks l\xe6ngde","form.attribute.item.minimum":"Minimum v\xe6rdi","form.attribute.item.minimumLength":"Minimum l\xe6ngde","form.attribute.item.number.type":"Tal format","form.attribute.item.number.type.biginteger":"stort helt tal (f.eks. 123456789)","form.attribute.item.number.type.decimal":"decimal (f.eks. 2.22)","form.attribute.item.number.type.float":"float (f.eks. 3.33333333)","form.attribute.item.number.type.integer":"helt tal (f.eks. 10)","form.attribute.item.privateField":"Privat felt","form.attribute.item.privateField.description":"Dette flet bliver ikke vist i API svar","form.attribute.item.requiredField":"P\xe5kr\xe6vet felt","form.attribute.item.requiredField.description":"Du kan ikke oprette et element hvis dette felt er tomt","form.attribute.item.settings.name":"Indstillinger","form.attribute.item.text.regex":"RegExp m\xf8nster","form.attribute.item.text.regex.description":"Teksten til regular expression","form.attribute.item.uniqueField":"Unikt felt","form.attribute.item.uniqueField.description":"Du kan ikke oprette et element hvis der allerede findes et element med samme indhold","form.attribute.media.allowed-types":"V\xe6lg tillade typer af medier","form.attribute.media.allowed-types.none":"Ingen","form.attribute.media.allowed-types.option-files":"Filer","form.attribute.media.allowed-types.option-images":"Billeder","form.attribute.media.allowed-types.option-videos":"Videoer","form.attribute.media.option.multiple":"Flere medier","form.attribute.media.option.multiple.description":"Best til gallerier, slideshows eller download af flere filer","form.attribute.media.option.single":"Enkelt medie","form.attribute.media.option.single.description":"Best til avatar, profil billeder eller cover","form.attribute.settings.default":"Standard v\xe6rdi","form.attribute.text.option.long-text":"Lang tekst","form.attribute.text.option.long-text.description":"Bedst til beskrivelser, biografier. Pr\xe6cis s\xf8gning er deaktiveret.","form.attribute.text.option.short-text":"Kort tekst","form.attribute.text.option.short-text.description":"Bedst til titler, navne, links (URL). Pr\xe6cis s\xf8gning er aktiveret.","form.button.add-components-to-dynamiczone":"Tilf\xf8j komponenter til zonen","form.button.add-field":"Tilf\xf8j endnu et felt","form.button.add-first-field-to-created-component":"Tilf\xf8j det f\xf8rste felt til komponentet","form.button.add.field.to.collectionType":"Tilf\xf8j endnu et felt til dokument typen","form.button.add.field.to.component":"Tilf\xf8j endnu et felt til komponentet","form.button.add.field.to.contentType":"Tilf\xf8j endnu et felt til dokument typen","form.button.add.field.to.singleType":"Tilf\xf8j endnu et felt til enkelt typen","form.button.cancel":"Annuller","form.button.collection-type.description":"Bedst til Best for flere forkomster som artikler, produkter, kommentarer osv...","form.button.configure-component":"Konfigur\xe9r komponentet","form.button.configure-view":"Konfigur\xe9r visning","form.button.continue":"Forts\xe6t","form.button.delete":"Slet","form.button.finish":"F\xe6rdig","form.button.save":"Gem","form.button.select-component":"V\xe6lg et komponent","form.button.single-type.description":"Bedst til enkelte forekomster som \\"om os\\", forside osv...","form.contentType.divider.draft-publish":"Udkast/offentligg\xf8r","from":"fra","listView.headerLayout.description":"Byg datastrukturen for dit indhold","modalForm.attribute.form.base.name":"Navn","modalForm.attribute.form.base.name.description":"Mellemrum er ikke tilladt i navnet","modalForm.attribute.form.base.name.placeholder":"f.eks. Slug, SEO URL, Canonical URL","modalForm.attribute.target-field":"Vedh\xe6ftet felt","modalForm.attribute.text.type-selection":"Type","modalForm.attributes.select-component":"V\xe6lg et komponent","modalForm.attributes.select-components":"V\xe6lg komponenterne","modalForm.collectionType.header-create":"Opret en dokumenttype","modalForm.component.header-create":"Opret et komponent","modalForm.components.create-component.category.label":"V\xe6lg en kategori eller intast et navn for at oprette en ny","modalForm.components.icon.label":"Ikon","modalForm.editCategory.base.name.description":"Mellemrum er ikke tilladt i kategori navnet","modalForm.header-edit":"Redig\xe9r {name}","modalForm.header.categories":"Kategorier","modalForm.singleType.header-create":"Opret en enkelt type","modalForm.sub-header.addComponentToDynamicZone":"Tilf\xf8j komponent til den dymaiske zone","modalForm.sub-header.attribute.create":"Tilf\xf8j {type} felt","modalForm.sub-header.attribute.create.step":"Tilf\xf8j komponent ({step}/2)","modalForm.sub-header.attribute.edit":"Redig\xe9r {name}","modalForm.sub-header.chooseAttribute.collectionType":"V\xe6lg et felt til din dokument type","modalForm.sub-header.chooseAttribute.component":"V\xe6lg et felt til dit komponent","modalForm.sub-header.chooseAttribute.singleType":"V\xe6lg et felt til din enkelt type","modelPage.attribute.relation-polymorphic":"Relation (polymorphic)","modelPage.attribute.relationWith":"Relation med","none":"Ingen","notification.info.autoreaload-disable":"AutoReload funktionen er p\xe5kr\xe6vet for at bruge dette plugin. Start din server med `strapi develop`","notification.info.creating.notSaved":"Gem venligst dit arbejde inden du opretter en dokument type eller komponent","plugin.description.long":"Modell\xe9r data strukturen i dit API. Opret felter og relationer p\xe5 f\xe5 minutter. Filerne bliver automatisk oprettet og opdateret i dit projekt.","plugin.description.short":"Modell\xe9r data strukturen i dit API.","plugin.name":"Dokumenttype bygger","popUpForm.navContainer.advanced":"Avancerede indstillinger","popUpForm.navContainer.base":"Standard indstillinger","popUpWarning.bodyMessage.cancel-modifications":"Er du sikker p\xe5 at du vil annullere dine \xe6ndringer?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Er du sikker p\xe5 at du vil annullere dine \xe6ndringer? Nogle komponenter er blevet oprettet eller redigeret...","popUpWarning.bodyMessage.category.delete":"Er du sikker p\xe5 at du vil slette denne kategori? Alle komponenterne bliver ogs\xe5 slettet.","popUpWarning.bodyMessage.component.delete":"Er du sikker p\xe5 at du vil slette denne komponent?","popUpWarning.bodyMessage.contentType.delete":"Er du sikker p\xe5 at du vil slette denne dokument type?","popUpWarning.draft-publish.button.confirm":"Ja, deaktiv\xe9r","popUpWarning.draft-publish.message":"Hvis du deaktiverer udkast/offentligg\xf8r systemet, bliver dine udkast slettet.","popUpWarning.draft-publish.second-message":"Er du sikker p\xe5 at du vil deaktivere det?","prompt.unsaved":"Er du sikker p\xe5 at du vil stoppe? Alle dine \xe6ndringer g\xe5r tabt.","relation.attributeName.placeholder":"F.eks. forfatter, kategori, tag","relation.manyToMany":"har og tilh\xf8rer flere","relation.manyToOne":"har flere","relation.manyWay":"har flere","relation.oneToMany":"tilh\xf8rer flere","relation.oneToOne":"har og tilh\xf8rer \xe9n","relation.oneWay":"har \xe9n","table.button.no-fields":"Tilf\xf8j nyt felt","table.content.create-first-content-type":"Opret din f\xf8rst dokumenttype","table.content.no-fields.collection-type":"Tilf\xf8j dit f\xf8rste felt til denne dokumenttype","table.content.no-fields.component":"Tilf\xf8j dit f\xf8rste felt til dette komponent","table.headers.name":"Navn","table.headers.type":"Type"}')}}]);