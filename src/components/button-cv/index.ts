import { styled } from "styled-components";

export const ButtonCV = styled.button`
  display: flex;
  cursor: pointer;
  white-space: nowrap;

  &.download_cv {
    padding: 1rem 2.5rem;
    background: var(--pink-200);
    border: 3px solid var(--pink-500);
    border-radius: 0.75rem;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      background 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  &.download_cv::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--pink-300);
    border-radius: inherit;
    box-shadow: 0 0 0 2px var(--pink-500);
    -webkit-transform: translate3d(0, 0.75rem, -1rem);
    transform: translate3d(0, 0.75rem, -1rem);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  &.download_cv:hover {
    -webkit-transform: translate(0, 0.25rem);
    transform: translate(0, 0.25rem);
  }

  &.download_cv:hover::before {
    -webkit-transform: translate3d(0, 0.5rem, -1rem);
    transform: translate3d(0, 0.5rem, -1rem);
  }

  &.download_cv:active {
    -webkit-transform: translate(0rem, 0.75rem);
    transform: translate(0rem, 0.75rem);
  }

  &.download_cv:active::before {
    -webkit-transform: translate3d(0, 0, -1rem);
    transform: translate3d(0, 0, -1rem);
  }
`;
