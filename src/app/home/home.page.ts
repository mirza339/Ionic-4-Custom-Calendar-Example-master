import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fakeData = [{"id":1,"title":"Keelby","detail":"1EECzChNMNi4njZW2SKvVZFBsq4hRb8K3n","date":"03/07/2020"},
    {"id":2,"title":"Valdemar","detail":"13BwWvHCSj52BjSo7LmymiRCh4RuGPwLxS","date":"01/04/2020"},
    {"id":3,"title":"Jodie","detail":"1Q2pS1puyAtt2wnmn26YEXRxrdvLuzfiAc","date":"04/12/2019"},
    {"id":4,"title":"Libbey","detail":"1QCxGqddR7hGXDWARYDgpZbHWm1bnNthQm","date":"04/16/2019"},
    {"id":5,"title":"Johnny","detail":"1542Dq5CJYHcPLjdzNFwtCZ3Mbj2qC5tGf","date":"09/09/2019"},
    {"id":6,"title":"Shepard","detail":"14Yf6sevBNRXn9ZSo5wseEPGFaftnoNHeu","date":"07/22/2019"},
    {"id":7,"title":"Arvy","detail":"1BD9Ezh5UxPWyv1ABgpryi4A6Y8sxneEn3","date":"09/18/2019"},
    {"id":8,"title":"Talbot","detail":"1825yReqcfXjaGaU1zJAXiow8kRzPHUDr6","date":"05/04/2019"},
    {"id":9,"title":"Inge","detail":"12nSZUHJXfbAaUkFf75hSo5DDewohb4aq6","date":"01/13/2020"},
    {"id":10,"title":"Lynnette","detail":"1K1BnUzCufThnMeJmeCY8TNDEiuL4FwyMe","date":"10/20/2019"}];
  eventSource = [];
  loadFakeData() {
    this.eventSource = [];
    this.fakeData.forEach((data) => {
      let event: any = {};
      event.id = data.id;
      event.allDay = true;
      let date = new Date(data.date);
      let startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1));
      event.startTime = new Date(startTime);
      let endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 2));
      console.log(endTime);
      event.endTime = new Date(endTime);
      event.title =  data.title + '-' + data.detail;
      console.log(event);
      this.eventSource.push(event);
    });
  }
  loadApiData() {
    /// add your logic
  }
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  selectedDate = new Date();

  constructor() {
  }

  addNewEvent() {

  }

  onViewTitleChanged(title) {
    console.log(title);
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedDate = ev.selectedTime;
  }

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

}
