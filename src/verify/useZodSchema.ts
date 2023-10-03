import { z } from 'zod'

// profile 驗證
export function useProfileSchema(form: any) {
  const profileSchema = z.object({
    englishName: z.string().refine(
      (val) => val.length > 8,
      (val) => ({ message: `${val} 最少八個字` })
    ),
    introductionVideo: z
      .string()
      .refine(
        (value) => /^https:\/\/youtu\.be\//.test(value),
        'URL must start with https://youtu.be/'
      )
  })

  // formErrors 的初始結構
  const initialFormErrors = Object.keys(profileSchema.shape).reduce(
    (acc, key) => {
      acc[key] = ''
      return acc
    },
    {} as Record<string, string>
  )

  const verifyField = (fieldName: string, value: any) => {
    const partialSchema = profileSchema.pick({ [fieldName]: true })
    const result = partialSchema.safeParse({ [fieldName]: value })
    if (!result.success && value) {
      formErrors[fieldName] = result.error.issues[0].message
    } else {
      formErrors[fieldName] = ''
    }
    console.log('formErrors:', formErrors)
  }
  const formErrors = reactive(initialFormErrors)
  // 驗證單個input ex. verifyData('email')
  // submit　全部驗證 verifyData()

  interface Issue {
    path: string[];
    message: string;
  }

  const verifyData = (field?: string) => {
    // console.log('verifyData called with field:', field)
    if (field) {
      verifyField(field, form[field])
    } else {
      Object.keys(formErrors).forEach((key) => (formErrors[key] = ''))
      const { success, error } = profileSchema.safeParse(form) as { success: boolean; error: any }
      if (!success) {
        error.issues.forEach((item:Issue) => {
          formErrors[item.path[0]] = item.message
        })
      }
      return { success }
    }
  }

  return {
    profileSchema,
    formErrors,
    verifyData
  }
}
