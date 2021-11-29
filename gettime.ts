import dayjs from "dayjs"

export function gettime() {
    return dayjs().format('YYYY-MM-DD-HHmmss-SSS');
}
