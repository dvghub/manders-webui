<template>
    <div class="card col-12 col-md-10 mx-auto my-5 border-0">
        <h3 class="card-header bg-white">agenda</h3>
        <div class="row card-body text-left">
            <div class="col-12 col-md-7 border-top border-secondary px-0">
                <template v-if="blanks">
                    <div v-for="blank in blanks" v-bind:key="blank + 'blank'" class="col-weekday empty-div height-50 bg-light float-left p-1"></div>
                </template>
                <div v-for="day in days" v-bind:key="new Date(day).getDate()" class="col-weekday height-50 float-left p-1 hoverable" v-on:click="getScheduleForDay(day)">
                    {{new Date(day).getDate()}}
                </div>
                <template v-if="blanks2">
                    <div v-for="blank2 in blanks2" v-bind:key="blank2 + 'blank2'" class="col-weekday empty-div height-50 bg-light float-left p-1 border-bottom border-secondary"></div>
                </template>
                <div class="dropdown-divider"></div>
            </div>
            <div class="col mt-3 mt-md-0">
                <div class="col-2 float-left px-0">
                    <div class="col-12 height-40 float-left clear-left border-top border-secondary px-0" v-bind:key="hour" v-for="hour in 12">
                        {{hour === 1 || hour === 2 ? '0' : ''}}{{hour + 7}}:00
                    </div>
                </div>
                <div class="col-10 float-left px-0">
                    <div class="float-left clear-left col-12 text-right"
                         v-bind:class="slot.type === 'blank' ? 'empty-div' : 'bg-slot'"
                         v-bind:style="{ height: slot.size * 10 + 'px' }"
                         v-bind:key="slot.start"
                         v-for="slot in slots">
                        {{slot.type === 'slot' ?
                            new Date(slot.start).getHours() + ':' +
                            new Date(slot.start).getMinutes() + '-' +
                            new Date(slot.end).getHours() + ':' +
                            new Date(slot.end).getMinutes() : ''}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import api from '../api.config.js';
  const axios = require('axios');

  export default {
    mounted() {
      this.today = new Date();
      this.day = 0;
      this.month = this.today.getMonth();
      this.year = this.today.getFullYear();
      this.days = this.getDaysPerMonth(this.month);
      this.blanks = new Date(this.year, this.month, 1).getDay() - 1;
      this.total = this.blanks + this.days.length;
      this.blanks2 = this.getStragglers();
    },
    data() {
      return {
        today: 0,
        day: 0,
        month: 0,
        year: 0,
        days: 0,
        blanks: 0,
        total: 0,
        blanks2: 0,
        slots: []
      }
    },
    methods: {
      getDaysPerMonth(month) {
        let days = [];
        let length = 0;
        switch (month) {
          case 0:
            length = 31;
            break;
          case 1:
            length = this.isLeapYear(this.year) ? 29 : 28;
            break;
          case 2:
            length = 31;
            break;
          case 3:
            length = 30;
            break;
          case 4:
            length = 31;
            break;
          case 5:
            length = 30;
            break;
          case 6:
            length = 31;
            break;
          case 7:
            length = 31;
            break;
          case 8:
            length = 30;
            break;
          case 9:
            length = 31;
            break;
          case 10:
            length = 30;
            break;
          case 11:
            length = 31;
            break;
          default:
            length = 0;
        }
        for (let i = 0; i < length; i++) {
          days[i] = new Date(this.year, this.month, i + 1);
        }
        return days;
      },
      getStragglers() {
        let blanks = 0;
        while (this.total % 7 !== 0) {
          blanks ++;
          this.total++;
        }
        return blanks;
      },
      getScheduleForDay(day) {
        const date = new Date(day);
        axios.get(api.url + '/schedule/day/' + date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate()).then(response => {
          this.slots = [];
          this.makeOverviewForSchedule(response.data)
        })
      },
      makeOverviewForSchedule(schedule) {
        schedule.forEach((s, i) => {
          const prev = i === 0 ? new Date(1975, 0, 1, 8).toISOString() : schedule[i - 1].End;

          this.slots.push({
            size: this.getQuarters(prev, s.Start),
            type: 'blank',
            start: prev,
            end: s.Start
          }, {
            size: this.getQuarters(s.Start, s.End),
            type: 'slot',
            start: s.Start,
            end: s.End
          });
        });

        console.log(this.slots);
      },
      getQuarters(s, e) {
        const start = new Date(s.replace('T', ' '));
        const end = new Date(e.replace('T', ' '));
        const diff = Math.abs(end - start);

        return diff / 1000 / 60 / 15;
      },
      isLeapYear(year)  {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
      }
    },
    name: "agenda"
  }
</script>

<style scoped>
    .col-weekday {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        -ms-flex: 0 0 14.285714285714285714285714285714%;
        flex: 0 0 14.285714285714285714285714285714%;
        max-width: 14.285714285714285714285714285714%;
    }
    .empty-div:after {
        content: '\200b';
    }
    .height-50 {
        height: 50px;
    }
    .height-40 {
        height: 40px;
    }
    .clear-left {
        clear: left;
    }
    .bg-slot {
        background-color: #a4ccda;
    }
    .hoverable:hover {
        background-color: #eeeff0;
        cursor: pointer;
    }
</style>
