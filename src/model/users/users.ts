import { z } from 'zod';
import _ from 'lodash';
import { deepCamelCaseKeys } from '@/utils/camelCase'


export function parseUsersData(data: any) {
  const tranformData = z.object({
    address: z.object({
      city:z.string(),
      country:z.string(),
      streetName: z.string()
    })
  }).passthrough();
  
  // const centerUsersResults = z.array(tranformData);

  return tranformData.parse(data);
}

export function parseConsultantScheduleList(data: any) {
  const tranformData = z.object({
    consultant_user_id: z.number(),
    hb_consultant_id: z.number(),
    name: z.string().nullable(),
    sort_name: z.string(),
    timeslots: z.array(
      z.object({
        created_at: z.string(),
        hb_consultant_id : z.number(),
        id: z.number(),
        status: z.number(),
        timeslot: z.number(),
        timestamp: z.number(),
        type: z.string()
      })
    ).nullable(), 
  }).transform(deepCamelCaseKeys);
  
  const ConsultantScheduleList = z.array(tranformData);
  return ConsultantScheduleList.parse(data);
}

export function parseConsultantWeeklyScheduleList(data: any) {
  const tranformData = z.object({
    date: z.string(),
    statistics: z.array(
      z.object({
        hbf_total: z.number(),
        hbt_total : z.number(),
        timeslot: z.number(),
        timestamp: z.string(),
      })
    ), 
  }).transform(deepCamelCaseKeys);
  
  const ConsultantWeeklyScheduleList = z.array(tranformData);
  return ConsultantWeeklyScheduleList.parse(data);
}

export function parseGetWeeklyScheduleConsultants(data: any) {
  const tranformData = z.array(
      z.object({
        consultant_user_id: z.number(),
        email : z.string(),
        grade: z.string(),
        hb_consultant_name: z.string(),
        is_demo: z.number(),
        max_level: z.number(),
        min_level: z.number(),
        nationality: z.string(),
        picture: z.string().nullable(),
        seven_days: z.number(),
        work_phone: z.string(),
      })
    ) 
  .transform(deepCamelCaseKeys);
  
  const getWeeklyScheduleConsultants = tranformData;
  return getWeeklyScheduleConsultants.parse(data);
}
