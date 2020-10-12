import React from 'react';

export default function DateSlot() {
  create_appointment_windows({
    start_date: Date(2020, 6, 1),
    end_date: Date(2020, 6, 2),
    start_time: "09:00",
    end_time: "10:00",
    test_kits_per_day: 10
  })
  
  const dict = [
    { 
      start_time: Date(2020, 6, 1, 9),
      end_time: Date(2020, 6, 1, 9, 30),
      slots_available: 5
    },
    { 
      start_time: Date(2020, 6, 1, 9, 30),
      end_time: Date(2020, 6, 1, 10),
      slots_available: 5
    },
    { 
      start_time: Date(2020, 6, 2, 9),
      end_time: Date(2020, 6, 2, 9, 30),
      slots_available: 5
    },
    { 
      start_time: Date(2020, 6, 2, 9, 30),
      end_time: Date(2020, 6, 2, 10),
      slots_available: 5
    },
  ]
  
  function create_appointment_windows(input){
    return dict.map(item => {
      item.start_time >= get_time(input.start_date, input.start_time) &&
        item.end_time <= get_time(input.end_date, input.end_time)
    })
  }
  function get_time(date, time) {
    
    console.log(moment(date).format("MMMM Do YYYY"))
  }
  return null;
}