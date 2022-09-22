import { Component, OnInit } from '@angular/core';
import { IFooterLinks } from 'src/app/shared/shared.type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  links: IFooterLinks[] = [
    {
      title: "Get to Know Us",
      links: [
        "Careesrs",
        "Blog",
        "About amazon",
        "Investor Relations",
        "Amazon Devices",
        "Amazon Science"
      ]
    },
    {
      title: "Amazon Payment Products",
      links: [
        "Amazon Business Card",
        "Shop with Points",
        "Reload Your Blaance",
        "Amazon Currency Converter"
      ]
    },
    {
      title: "Make Money with Us",
      links: [
        "Sell products on Amazon",
        "Sell on Amazon Business",
        "Sell apps on Amazon",
        "Become an Affillate",
        "Advertise Your Products",
        "Self-Publish with Us",
        "Host an Amazon Hub",
        "See More Make Money with Us"
      ],
    },
    {
      title: "Let Us Help You",
      links: [
        "Amazon and COVID-19",
        "Your Account",
        "Your Orders",
        "Shipping Rates & Policies",
        "Returns & Replacements",
        "Manage Your Content and Devices",
        "Amazon Assistant",
        "Help"
      ]
    }
  ]




  constructor() { }

  ngOnInit(): void {
  }

}
