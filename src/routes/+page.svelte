<script>
    export let data;
</script>
<div class="position-relative test">
    <div class="position-absolute top-50 start-50 translate-middle">
        <h1>Zitat des Tages:</h1>
        <br>
        <figure>
            <blockquote class="blockquote">
            <p>{data.data[0].q}</p>
             </blockquote>
            <figcaption class="blockquote-footer">
            {data.data[0].a} <cite title="Source">in Chromik des Jahrhunderts</cite>
            </figcaption>
        </figure>
    </div>
</div>
<style>
    .test {
        height: 100vh;
    }
</style>