import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  faqArray: boolean[];

  constructor() {}

  ngOnInit(): void {
    this.faqArray = new Array(this.faqs.length).fill(false);
  }

  onFaqClick(i) {
    this.faqArray[i] = !this.faqArray[i];
  }

  faqs = [
    'Multi Routs at once .. up to 3 routes',
    'Passenger Rights / Obligations',
    'Ferry delays or change departure time',
    'Find a port or island and book',
    'Strike of third party (Seamen Strike)',
    'Facing difficulties booking online?',
    'What is the policy on changes and cancellations?',
    'What should I do if my ferry is cancelled due to weather?',
    'Can I book a ticket on the Igoumenitsa – Corfu route?',
    'Are students entitled of a discount?',
    'Can I take my pet on board?',
    'What is the baggage limit?',
    'How should I book an infant with SeaJets company?',
    'What are the various ticket class options available?',
    'Do I get a refund in case of no-show?',
    'What should I do if lose my tickets? ',
  ];

  answers = [
    [
      'Greeceferries collect the same company in one booking. Please select the same company for multi route. In case of emergency contact  us 0030  6974823355    mobile // viber  // whatsApp // or info@greeceferries.com',
    ],
    [
      'PASSENGER TICKET TERMS',
      '1-The ticket is individual and nominal, not transferable and valid for the position, route and date for which it was issued.',
      '2-The passenger must be at the boarding station at least 60 minutes before departure. In the event of a passenger’s arrival after the departure, the fare ticket is not refundable.',
      '3-The passenger is entitled to carry hand luggage weighing up to fifty (50) kg without paying a special fare.',
      '4-If the passenger has retained his luggage, the shipowner is not liable for any damage or loss.',
      '5-Valuables, money and valuables can be delivered to the ship’s accounting department for safekeeping. The company does not bear any responsibility in case of loss of such items kept in baggage and not delivered to the accountant’s warehouse for safekeeping.',
      '6-The shipowning company is not responsible for any delay of the route, deviation and non-observance of a normal course, due to bad weather conditions or orders of the Coast Guard or for reasons of force majeure.',
      '7-Passengers are forbidden to carry explosive, flammable, incendiary and generally hazardous materials.',
      '8-Passengers must comply with relevant Port, Sanitary and Customs provisions as appropriate.',
      '9-Passengers must comply with the instructions of the master and the crew regarding the maintenance of order and safety of the ship.',
      '10-For every complaint during the voyage, passengers must contact the master or the ship’s chief and, at the end of the journey, initially to the ticket issuer or shipowner or port authorities. If the passenger is not satisfied, after 15 working days, he or she may contact the Port Authority for boarding or disembarking, 3332.12 / 01/09 / 23-02-2009 (Government Gazette 427 B ‘) Y.A. Service.',
      '11- In the event of a dispute, the civil courts are responsible for resolving it.',
      'CONDITIONS OF PROOF OF VEHICLE TRANSPORT',
      '1-The driver is required to load and unload his vehicle.',
      '2-The passenger is obliged to bring the vehicle in the waiting area one (1) hour before the ship leaves the ship.',
      '3-Vehicle passengers are required to disembark from them before they are loaded onto the ship.',
      '4-Drivers and passengers must carry with them the items they will need during the journey. Post-entry is forbidden to enter the vehicle space.',
      '5-Passengers are forbidden to carry explosive, flammable, incendiary and generally hazardous materials.',
      '6-The priority order of loading of vehicles is determined by the Port Regulations of each Port Authority in the area of loading. RECEIVING TICKETS',
      '1-Your tickets can be picked up by the Company’s Central or Port Company at the port of departure no later than one hour before departure.',
      '2-In order to receive your tickets, you must – necessarily – have your Booking Number and your Identity Card or Passport with you.',
      '3-If you own Eurail / Interrail Pass, you should also have your current rail ticket with you (eg Eurail / Interrail Greek Islands Pass).',
      'Note: Email confirmation of your reservation is not a proof of your boarding.',
    ],
    [
      'For any LAST MOMENT ferry delay or ferry change time, please contact imidiatelly at the moment you are informed this, the central travel agent of the ferry company written on your tickets at the departure or arrival port or on board the accounting ferry Department or ferry company direct after your trip and maximum 7 days and ask for their action explaining your complains,',
      'We are always at your service as an assistant for any case and please INFORM us at 0030 6974823355 emergency mobile or mail us at info@greeceferries.com',
    ],
    [
      'In any case of difficulties for booking online please  send us an email  at info@greeceferries.com or call us at local phone 0030  210 3251295 or',
      '// Mobile // Viber // WhatsApp // 0030 6974823355',
      'We will be happy to serve you.',
    ],
    [
      'If a third party like seamen is on a strike and ferries cannot run as scheduled, ferry companies and our company, we shall try to find the best solution for you, to continue your trip,',
      'Please follow the instruction 1-6',
      '1. Contact the central port travel agent at the place you are',
      '2. Ask him for informing you the last news for the situation and if he has any last moment solution for you to continue your trip.',
      '3. Differently ask him to give you a refund for the ferry tickets price giving him the unused tickets because of the strike, as he is the central travel agent of ferry company.',
      '4. If this is not possible from central travel agent,please do not through away your printed ferry tickets, but you have to return these original paper tickets to us because we are the travel agent, online system, you made this booking, VERY IMPORTANT !!! without these tickets back,at our Office, ferry companies according to the Greec law do not give any refund.',
      '5. We are here for an assistant. info@greeceferries.com',
      '6. For this and any Emergency you may call us at 0030 6974823355,mobile..viber..whatsapp.',
    ],
    [
      'Your reservation may be done via our email. info@greeceferries.com. We will be happy to book for you. For this it is needed to forward us:',
      'Passengers’ full names, gender and nationality (for child’s and infants, birthdate, for a car, plate number), Departure and arrival ports. Date and time of travel. The ticket class you prefer, such as the economy, business, VIP, cabin',
      'If you travel Italy-Greece or Turkey Greece, we need to be informed with the Pasport number the date of issue and birthdate of all travelers. For cars please inform us car plate number and car type or RENTAL. Moreover, please, let us know how you wish to pick up your tickets.',
      'Five ( 5 ) options: choose one',
      '1–Our office in Athens city centre at 61, Eleftheriou Venizelou Ave (Panepistimiou) (google map link: http://goo.gl/maps/Gku3f) free of charge Monday to Friday 10:00-17:00 Saturday 10:00-15:00',
      '2–The kiosk of the shipping company at the port of departure (delivery fee: 5 euro)',
      '3–Your hotel in Greece (delivery fee: euro 5) …send us a hotel name and their phone',
      '4–Your country (delivery fee: in Europe, euro 20-25 the rest of the world, euro 30-35',
      '5–if you arrive in Athens and you choose to book from our company a taxi transfer we can give your ferry tickets on hand by the taxi driver free of charge.',
      'Once the reservation is made, payment should be made via credit card through our bank secure online payment link that will be forwarded to you.',
      'Not quite what you are looking for? Get Help',
    ],
  ];
}
