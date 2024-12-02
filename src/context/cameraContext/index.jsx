import { create } from "zustand"


const useCameraStore = create((set) => ({
  initialCameraPosition: [ 0, 1.28, 8.82 ],
  animatedCameraPosition: [ -20, 10, 50 ],
  cameraPosition: [ 0, 1.28, 8.82 ],
  disableAnimation: false,
  hasInteracted: false,

  // Method to update camera position with animation control
  setCameraPosition: (position, useAnimation = true) => {
    set({
      cameraPosition: position,
      disableAnimation: !useAnimation,
    })
  },

  // Method to toggle interaction state
  setHasInteracted: (hasInteracted) => {
    set({ hasInteracted })
  },

  // Method to toggle animation disabling
  setDisableAnimation: (disableAnimation) => {
    set({ disableAnimation })
  },
}))

export default useCameraStore