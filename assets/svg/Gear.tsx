import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg width={23.174} height={23.824} viewBox="0 0 512 512" {...props}>
      <Path
        {...props}
        d="M474.836 190.613l-24.969-4.234a207.237 207.237 0 00-7.512-18.16l14.704-20.57c12.793-17.973 10.738-42.247-4.836-57.669l-30.004-30.007c-8.48-8.48-19.723-13.153-31.653-13.153-9.394 0-18.378 2.895-25.918 8.32L344 69.849a205.77 205.77 0 00-19.39-7.993l-4.13-24.464C316.848 15.723 298.262 0 276.285 0h-42.39c-21.973 0-40.56 15.723-44.184 37.348l-4.34 25.422a201.985 201.985 0 00-18.09 7.62l-20.273-14.6c-7.602-5.474-16.621-8.364-26.086-8.364-12.047 0-23.293 4.68-31.68 13.18L59.168 90.581c-15.531 15.531-17.566 39.785-4.836 57.668l14.941 20.992a203.281 203.281 0 00-7.418 18.246l-24.468 4.13C15.723 195.253 0 213.84 0 235.812v42.39c0 21.973 15.723 40.559 37.348 44.188l25.422 4.336a202.238 202.238 0 007.62 18.093l-14.546 20.235c-12.793 17.972-10.739 42.25 4.836 57.668l30.004 30.007c8.48 8.48 19.722 13.153 31.652 13.153 9.394 0 18.379-2.895 25.914-8.317l20.992-14.941a207.108 207.108 0 0017.106 7.023l4.16 24.965C194.145 496.277 212.73 512 234.703 512h42.488c21.973 0 40.563-15.723 44.192-37.36l4.234-24.972a207.237 207.237 0 0018.16-7.512l20.504 14.656c7.602 5.473 16.621 8.368 26.086 8.368 11.926 0 23.168-4.672 31.649-13.153l30.004-30.007c15.535-15.532 17.566-39.786 4.835-57.668l-14.718-20.668a204.786 204.786 0 007.539-18.137l24.933-4.156c21.664-3.637 37.387-22.223 37.387-44.196v-42.304c.246-21.996-15.363-40.606-37.16-44.278zm7.16 86.582a14.763 14.763 0 01-12.336 14.606l-33.07 5.512c-6.102 1.015-11.024 5.32-12.856 11.238-2.937 9.52-6.972 19.25-11.984 28.906a16.162 16.162 0 001.18 16.926l19.488 27.367a14.769 14.769 0 01-1.61 19.059l-30.003 30.004c-2.856 2.855-6.465 4.367-10.438 4.367-3.133 0-6.09-.938-8.597-2.742l-27.25-19.477c-5.012-3.598-11.528-4.05-17-1.188a176.644 176.644 0 01-28.946 11.985 16.169 16.169 0 00-11.156 12.781l-5.617 33.106A14.763 14.763 0 01277.19 482h-42.488a14.76 14.76 0 01-14.605-12.336l-5.512-33.07a16.174 16.174 0 00-11.133-12.828c-9.898-3.125-19.324-7-28.023-11.52a16.241 16.241 0 00-7.493-1.836 16.209 16.209 0 00-9.41 3.02l-27.738 19.742c-2.5 1.8-5.344 2.71-8.453 2.71-3.973 0-7.582-1.507-10.438-4.366L81.84 401.46c-5.13-5.078-5.781-13.07-1.598-18.95l19.371-26.945c3.645-5.058 4.09-11.62 1.153-17.14a171.538 171.538 0 01-12.137-28.797 16.2 16.2 0 00-12.754-11.102l-33.523-5.714A14.77 14.77 0 0130 278.203v-42.39a14.769 14.769 0 0112.363-14.61l32.664-5.512c6.106-1.027 11.024-5.343 12.84-11.28 3.082-10.087 7.047-19.84 11.785-28.981a16.183 16.183 0 00-1.183-16.903l-19.696-27.672a14.758 14.758 0 011.59-19.042l30.106-30.004.11-.114c2.706-2.754 6.378-4.27 10.343-4.27 3.133 0 6.094.938 8.555 2.712l27.062 19.48c5.066 3.649 11.637 4.086 17.137 1.149a171.489 171.489 0 0128.785-12.133 16.2 16.2 0 0011.11-12.758l5.718-33.523A14.763 14.763 0 01233.9 30h42.39a14.769 14.769 0 0114.61 12.363l5.511 32.676c1.031 6.11 5.356 11.024 11.297 12.836 10.129 3.078 20.23 7.234 30.031 12.36 5.446 2.843 11.934 2.398 16.95-1.169l27.43-19.535c2.495-1.8 5.339-2.71 8.452-2.71 3.97 0 7.578 1.507 10.438 4.367l30.054 30.054c5.13 5.078 5.786 13.07 1.575 18.98L413.14 157.5a16.177 16.177 0 00-1.168 16.977c4.8 9.164 8.832 18.902 11.988 28.949 1.84 5.86 6.742 10.133 12.781 11.152l33.078 5.613.028.004c7.136 1.2 12.25 7.254 12.148 14.399zm0 0"
      />
      <Path
        {...props}
        d="M256 156.453c-54.89 0-99.547 44.656-99.547 99.547S201.11 355.547 256 355.547 355.547 310.89 355.547 256 310.89 156.453 256 156.453zm0 169.094c-38.348 0-69.547-31.2-69.547-69.547s31.2-69.547 69.547-69.547 69.547 31.2 69.547 69.547-31.2 69.547-69.547 69.547zm0 0"
      />
    </Svg>
  );
}
