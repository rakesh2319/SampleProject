import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class Cal extends Component {
  render() {
    return (
      <View>
       <Calendar
       enableSwipeMonths={true}/>
      </View>
    )
  }
}