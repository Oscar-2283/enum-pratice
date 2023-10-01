import { z } from 'zod';
import { $_ } from '@/utils/tools';
import { deepCamelCaseKeys } from '@/utils/camelCase'


export function parseConsultantData(data: any) {
  const tranformData = z.object({
    account: z.string().nullable(),
    dislike_amount: z.number(),
    english_name: z.string().nullable(),
    hb_consultant_id: z.number(),
    like_amount: z.number(),
    picture: z.string().nullable(),
    user_id: z.number(),
  }).transform((item) => {
    const camelCasedItem = $_.mapKeys(item, (value, key) => $_.camelCase(key));
    return $_.mapValues(camelCasedItem, (value) => value === null ? "" : value);
  });
  
  const centerConsultantResults = z.array(tranformData);

  return centerConsultantResults.parse(data);
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
