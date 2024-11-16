export {default} from 'next-auth/middleware'

export const config = {
    matcher : ["/", '/main','/myBooking','/myProfile', '/dentistPage']
}