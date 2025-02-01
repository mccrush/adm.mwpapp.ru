<template>
  <div class="border border-2 border-success p-3">
    <table class="table table-striped align-middle mb-0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">User</th>
          <th scope="col" class="text-center">proFree</th>
          <th scope="col" class="text-center">proStatus</th>
          <th scope="col" class="text-center">startPro</th>
          <th scope="col" class="text-center">endPro</th>
          <th scope="col" class="text-center">Last Sig</th>
          <th scope="col" class="text-center">Бан</th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableMain',
  props: {
    items: Array
  }
}
</script>