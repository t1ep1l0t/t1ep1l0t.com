<template>
  <div class="segmented-control">

    <input type="radio" name="radio2" value="3" id="tab-1" checked/>
    <label for="tab-1" class= "segmented-control__1">
      <p>Tab 1</p>
    </label>

    <input type="radio" name="radio2" value="4" id="tab-2" />
    <label for="tab-2" class= "segmented-control__2">
      <p>Tab 2</p>
    </label>

    <input type="radio" name="radio2" value="5" id="tab-3" />
    <label for="tab-3" class= "segmented-control__3">
      <p>Tab 3</p>
    </label>

    <div class="segmented-control__color"></div>
  </div>
</template>

<script>
export default {
  name: "navigate-panel"
}
</script>

<style scoped lang="scss">
@import "../assets/_variables.scss";

.segmented-control {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  width: 20.4rem;
  height: 4rem;
  box-shadow: $shadow;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  position: relative;

  input { display: none; }

  > input:checked + label {
    transition: all .5s ease;
    color: $primary;
  }

  &__1, &__2, &__3 {
    width: 6.8rem;
    height: 3.6rem;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: $greyDark;
    transition: all .5s ease;

    &:hover { color: $primary; }
  }

  &__color {
    position: absolute;
    height: 3.4rem;
    width: 6.2rem;
    margin-left: .3rem;
    border-radius: .8rem;
    box-shadow: $inner-shadow;
    pointer-events: none;
  }
}

#tab-1:checked ~ .segmented-control__color {
  transform: translateX(0);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
#tab-2:checked ~ .segmented-control__color {
  transform: translateX(6.8rem);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
#tab-3:checked ~ .segmented-control__color {
  transform: translateX(13.6rem);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>