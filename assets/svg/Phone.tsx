import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Phone(props: SvgProps) {
  return (
    <Svg viewBox="0 0 221.719 221.719" {...props}>
      <Path d="M180.135 172.169l-4.624-7.721C167.195 150.737 155.718 135 140.664 135c-2.789 0-5.551.561-8.285 1.697l-8.08 3.465c-.738.306-1.455.654-2.214 1.023-2.068 1.006-4.413 2.145-6.825 2.145-5.95 0-12.844-7.743-19.409-21.802-6.443-13.799-6.032-21.033-4.553-24.673 1.632-4.016 5.427-5.733 9.504-7.276.567-.215 1.079-.41 1.577-.615l8.182-3.445c21.316-8.914 13.386-40.065 10.786-50.278l-2.205-8.781C117.257 19.223 112.259 0 95.681 0c-3.069 0-6.343.715-9.728 2.126-2.221.882-32.785 13.358-43.858 35.276-13.234 26.089-10.787 61.074 7.266 103.961 17.918 42.941 41.153 69.206 69.06 78.064 4.787 1.521 10.197 2.291 16.081 2.291h.003c19.259 0 38.27-8.194 39.813-8.874 6.64-2.813 10.932-7.088 12.756-12.707 3.092-9.529-2.095-19.969-6.939-27.968zm-7.33 23.338c-.424 1.306-1.898 2.498-4.378 3.542l-.133.058c-.172.076-17.38 7.613-33.793 7.612-4.342 0-8.225-.534-11.541-1.588-23.511-7.463-43.615-30.86-59.766-69.565-16.271-38.657-18.871-69.401-7.717-91.389 8.661-17.143 35.776-28.018 36.042-28.122l.16-.065c1.544-.648 2.928-.99 4.002-.99 3.305 0 6.313 5.126 8.927 15.173l2.195 8.744c4.736 18.6 4.015 30.234-2.048 32.77l-8.143 3.43c-.324.134-.703.275-1.121.434-4.498 1.703-13.858 5.245-18.091 15.657-3.841 9.448-2.251 21.442 4.856 36.668 9.572 20.493 20.367 30.455 33.002 30.455 5.864 0 10.571-2.288 13.383-3.654.518-.252.981-.483 1.479-.689l8.092-3.47c.835-.348 1.637-.517 2.451-.517 3.895 0 10.879 3.857 22.001 22.191l4.621 7.716c5.695 9.403 6.145 13.673 5.52 15.599z" />
    </Svg>
  );
}

export default Phone;
